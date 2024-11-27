package com.Backend.MindBridge.controller;

import com.Backend.MindBridge.dto.StoreDTO;
import com.Backend.MindBridge.dto.StoreResponseDTO;
import com.Backend.MindBridge.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class StoreController {

    private final StoreService storeService;

    @Autowired
    public StoreController(StoreService storeService) {
        this.storeService = storeService;
    }

    @GetMapping("/store")
    public StoreResponseDTO getAllProducts(@RequestParam Integer userId) {
        return storeService.getStoreInfo(userId);  // 사용자 포인트와 상품 목록 반환
    }

    @PostMapping("/store/purchase")
    public String purchaseItem(@RequestParam Integer userId, @RequestParam Integer itemId) {
        if (userId == null || itemId == null) {
            throw new RuntimeException("사용자 ID 또는 아이템 ID가 누락되었습니다.");
        }
        return storeService.purchaseItem(userId, itemId);  // 포인트 기록 저장
    }
}
