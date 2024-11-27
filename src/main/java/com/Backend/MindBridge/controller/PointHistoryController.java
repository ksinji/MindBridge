package com.Backend.MindBridge.controller;

import com.Backend.MindBridge.entity.PointHistory;
import com.Backend.MindBridge.service.PointHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PointHistoryController {

    private final PointHistoryService pointHistoryService;

    @Autowired
    public PointHistoryController(PointHistoryService pointHistoryService) {
        this.pointHistoryService = pointHistoryService;
    }

    // 유저의 포인트 히스토리 조회
    @GetMapping("/point")
    public List<PointHistory> getPointHistory(@RequestParam Integer userId) {
        return pointHistoryService.getPointHistoryByUserId(userId);
    }
}
