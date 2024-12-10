package com.Backend.MindBridge.controller;

import com.Backend.MindBridge.entity.HealthData;
import com.Backend.MindBridge.service.HealthDataService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/health")
public class HealthDataController {

    private final HealthDataService healthDataService;

    public HealthDataController(HealthDataService healthDataService) {
        this.healthDataService = healthDataService;
    }

    @GetMapping("/{watchId}/{startDate}/{endDate}")
    public ResponseEntity<List<HealthData>> getHealthDataByWatchIdAndWeek(
            @PathVariable String watchId,
            @PathVariable String startDate,
            @PathVariable String endDate) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate start = LocalDate.parse(startDate, formatter);
        LocalDate end = LocalDate.parse(endDate, formatter);

        List<HealthData> healthDataList = healthDataService.getHealthDataByWatchIdAndWeek(watchId, start);
        return ResponseEntity.ok(healthDataList);
    }

}
