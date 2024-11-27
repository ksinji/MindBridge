package com.Backend.MindBridge.dto;

import com.Backend.MindBridge.entity.PointHistory;

import java.util.List;

public class PointHistoryResponseDTO {

    private List<PointHistory> pointHistories;
    private int currentPoints;

    public PointHistoryResponseDTO(List<PointHistory> pointHistories, int currentPoints) {
        this.pointHistories = pointHistories;
        this.currentPoints = currentPoints;
    }

    public List<PointHistory> getPointHistories() {
        return pointHistories;
    }

    public void setPointHistories(List<PointHistory> pointHistories) {
        this.pointHistories = pointHistories;
    }

    public int getCurrentPoints() {
        return currentPoints;
    }

    public void setCurrentPoints(int currentPoints) {
        this.currentPoints = currentPoints;
    }
}
