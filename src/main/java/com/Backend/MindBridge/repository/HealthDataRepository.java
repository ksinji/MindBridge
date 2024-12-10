package com.Backend.MindBridge.repository;

import com.Backend.MindBridge.entity.HealthData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface HealthDataRepository extends JpaRepository<HealthData, Long> {
    List<HealthData> findByWatchId(String watchId);

    // 날짜 범위에 해당하는 데이터를 조회하는 메서드 추가
    List<HealthData> findByWatchIdAndDateBetween(String watchId, LocalDate startDate, LocalDate endDate);
}
