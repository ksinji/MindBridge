package com.Backend.MindBridge.service;

import com.Backend.MindBridge.dto.PointHistoryResponseDTO;
import com.Backend.MindBridge.entity.PointHistory;
import com.Backend.MindBridge.entity.Users;
import com.Backend.MindBridge.repository.PointHistoryRepository;
import com.Backend.MindBridge.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PointHistoryService {

    private final PointHistoryRepository pointHistoryRepository;
    private final UserRepository userRepository;

    public PointHistoryService(PointHistoryRepository pointHistoryRepository, UserRepository userRepository) {
        this.pointHistoryRepository = pointHistoryRepository;
        this.userRepository = userRepository;
    }

    // userId로 포인트 히스토리 조회 (createdAt 기준으로 내림차순 정렬)
    public PointHistoryResponseDTO getPointHistoryByUserId(Integer userId) {
        // 포인트 히스토리 조회
        List<PointHistory> pointHistories = pointHistoryRepository.findByUserIdOrderByCreatedAtDesc(userId);

        // 사용자 정보 조회
        Users user = userRepository.findByUserId(userId);
        if (user == null) {
            throw new RuntimeException("사용자를 찾을 수 없습니다.");
        }

        int userPoint = user.getUserPoint();  // 현재 유저의 포인트

        // 포인트 히스토리와 사용자 포인트를 함께 반환
        return new PointHistoryResponseDTO(pointHistories, userPoint);
    }
}


