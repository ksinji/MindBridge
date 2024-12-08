package com.Backend.MindBridge.service;

import com.Backend.MindBridge.entity.HealthData;
import com.Backend.MindBridge.repository.HealthDataRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.DayOfWeek;
import java.util.List;

@Service
public class HealthDataService {

    private final HealthDataRepository healthDataRepository;

    public HealthDataService(HealthDataRepository healthDataRepository) {
        this.healthDataRepository = healthDataRepository;
    }

    // 날짜가 속한 주의 시작일을 계산
    private LocalDate getStartOfWeek(LocalDate date) {
        return date.with(DayOfWeek.MONDAY);
    }

    // 날짜가 속한 주의 종료일을 계산
    private LocalDate getEndOfWeek(LocalDate date) {
        return date.with(DayOfWeek.SUNDAY);
    }

    // 주 단위로 데이터를 조회
    public List<HealthData> getHealthDataByWatchIdAndWeek(String watchId, LocalDate date) {
        LocalDate startOfWeek = getStartOfWeek(date);
        LocalDate endOfWeek = getEndOfWeek(date);

        // 주 시작일부터 끝일까지 데이터를 조회
        return healthDataRepository.findByWatchIdAndDateBetween(watchId, startOfWeek, endOfWeek);
    }
}
