package com.Backend.MindBridge.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "health_data")
public class HealthData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "health_data_id")
    private Long healthDataId;

    @Column(name = "watch_id", nullable = false, length = 16)
    private String watchId;

    @Column(name = "date", nullable = false)
    private LocalDate date;

    @Column(name = "activity_duration", nullable = false)
    private Integer activityDuration;

    @Column(name = "step_count", nullable = false)
    private Integer stepCount;

    @Column(name = "active_calories", nullable = false)
    private Integer activeCalories;

    @Column(name = "distance", nullable = false)
    private Double distance;

    @Column(name = "max_heart_rate", nullable = false)
    private Integer maxHeartRate;

    @Column(name = "max_illu", nullable = false)
    private Double maxIllu;

    // Getters and setters
    public Long getHealthDataId() {
        return healthDataId;
    }

    public void setHealthDataId(Long healthDataId) {
        this.healthDataId = healthDataId;
    }

    public String getWatchId() {
        return watchId;
    }

    public void setWatchId(String watchId) {
        this.watchId = watchId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Integer getActivityDuration() {
        return activityDuration;
    }

    public void setActivityDuration(Integer activityDuration) {
        this.activityDuration = activityDuration;
    }

    public Integer getStepCount() {
        return stepCount;
    }

    public void setStepCount(Integer stepCount) {
        this.stepCount = stepCount;
    }

    public Integer getActiveCalories() {
        return activeCalories;
    }

    public void setActiveCalories(Integer activeCalories) {
        this.activeCalories = activeCalories;
    }

    public Double getDistance() {
        return distance;
    }

    public void setDistance(Double distance) {
        this.distance = distance;
    }

    public Integer getMaxHeartRate() {
        return maxHeartRate;
    }

    public void setMaxHeartRate(Integer maxHeartRate) {
        this.maxHeartRate = maxHeartRate;
    }

    public Double getMaxIllu() {
        return maxIllu;
    }

    public void setMaxIllu(Double maxIllu) {
        this.maxIllu = maxIllu;
    }
}

