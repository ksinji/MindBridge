package com.Backend.MindBridge.service;

import com.Backend.MindBridge.dto.StoreDTO;
import com.Backend.MindBridge.dto.StoreResponseDTO;
import com.Backend.MindBridge.entity.PointHistory;
import com.Backend.MindBridge.entity.ShopItem;
import com.Backend.MindBridge.entity.Users;
import com.Backend.MindBridge.repository.ShopItemRepository;
import com.Backend.MindBridge.repository.PointHistoryRepository;
import com.Backend.MindBridge.repository.UserRepository;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StoreService {

    private final ShopItemRepository shopItemRepository;
    private final PointHistoryRepository pointHistoryRepository;
    private final UserRepository userRepository;

    public StoreService(ShopItemRepository shopItemRepository, PointHistoryRepository pointHistoryRepository, UserRepository userRepository) {
        this.shopItemRepository = shopItemRepository;
        this.pointHistoryRepository = pointHistoryRepository;
        this.userRepository = userRepository;
    }


    // 상품 목록과 사용자의 포인트를 함께 반환하는 메소드
    public StoreResponseDTO getStoreInfo(Integer userId) {
        // 사용자 포인트 조회
        Users user = userRepository.findByUserId(userId);
        if (user == null) {
            throw new RuntimeException("사용자를 찾을 수 없습니다.");
        }
        int userPoint = user.getUserPoint();

        // 상품 목록 조회
        List<StoreDTO> products = shopItemRepository.findAll().stream()
                .map(item -> new StoreDTO(
                        item.getCommonCode().getCodeName(),
                        item.getPrice()
                ))
                .collect(Collectors.toList());

        return new StoreResponseDTO(products, userPoint);  // 상품 목록과 포인트 함께 반환
    }

    // 아이템 구매 메소드
    public String purchaseItem(Integer userId, Integer itemId) {
        // 아이템 가격과 이름 불러오기
        ShopItem item = shopItemRepository.findById(itemId)
                .orElseThrow(() -> new RuntimeException("아이템을 찾을 수 없습니다."));
        int itemPrice = item.getPrice();
        String itemName = item.getCommonCode().getCodeName();

        Users user = userRepository.findByUserId(userId);
        if (user == null) {
            throw new RuntimeException("사용자를 찾을 수 없습니다.");
        }

        // 사용자의 포인트가 충분한지 확인
        if (user.getUserPoint() < itemPrice) {
            throw new RuntimeException("포인트가 부족합니다.");
        }

        // 포인트 차감
        user.setUserPoint(user.getUserPoint() - itemPrice);
        userRepository.save(user);  // 사용자 포인트 업데이트

        // 포인트 사용 기록 저장
        String transactionType = "purchase";
        String transactionDescription = itemName + " 구매";
        PointHistory pointHistory = new PointHistory(
                userId,
                transactionType,
                transactionDescription,
                itemPrice,
                LocalDateTime.now()
        );

        pointHistoryRepository.save(pointHistory);  // 포인트 기록 저장

        return "포인트 기록이 저장되었습니다.";
    }
}
