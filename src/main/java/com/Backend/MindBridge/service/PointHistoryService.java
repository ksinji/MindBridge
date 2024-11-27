package com.Backend.MindBridge.service;

import com.Backend.MindBridge.entity.PointHistory;
import com.Backend.MindBridge.repository.PointHistoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PointHistoryService {

    private final PointHistoryRepository pointHistoryRepository;

    public PointHistoryService(PointHistoryRepository pointHistoryRepository) {
        this.pointHistoryRepository = pointHistoryRepository;
    }

    // userId로 포인트 히스토리 조회 (createdAt 기준으로 내림차순 정렬)
    public List<PointHistory> getPointHistoryByUserId(Integer userId) {
        List<PointHistory> pointHistories = pointHistoryRepository.findByUserIdOrderByCreatedAtDesc(userId);
        System.out.println("Fetched Point History: " + pointHistories);  // 로그로 반환된 값 확인
        return pointHistories;
    }
}


