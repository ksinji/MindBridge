package com.Backend.MindBridge.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "Wear_Device_Data")
public class WearDeviceData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer healthDataId;

    @Column(name ="unit_id")
    private String unitId;

    @Column(name ="dataDt")
    private LocalDateTime dataDt;

    @Column(name ="Activity_Duration")
    private int activityDuration;

    @Column(name ="Step_Cnt")
    private int stepcnt;

    @Column(name ="Active_Calories")
    private double activeCalories;

    @Column(name ="Distance")
    private double distance;

    @Column(name ="Max_Heart_Rate")
    private int maxHeartRate;

    @Column(name ="Illu")
    private double illu;

    // 기본 생성자
    public WearDeviceData() {
    }

    // 모든 필드를 포함하는 생성자
    public WearDeviceData(String unitId, LocalDateTime dataDt, Integer activityDuration, Integer stepcnt, Double activeCalories, Double distance, Integer maxHeartRate, Double illumination){
        this.unitId = unitId;
        this.dataDt = dataDt;
        this.activityDuration = activityDuration;
        this.stepcnt = stepcnt;
        this.activeCalories = activeCalories;
        this.distance = distance;
        this.maxHeartRate = maxHeartRate;
        this.illu = illu;
    }

    // Getter와 Setter 메서드
    public Integer getHealthDataId() {return healthDataId;}
    public void setHealthDataId(Integer healthDataId) {this.healthDataId = healthDataId;}

    public String getUnitId() {return unitId;}
    public void setUnitId(String unitId) {this.unitId = unitId;}

    public LocalDateTime getDataDt() {return dataDt;}
    public void setDataDt(LocalDateTime dataDt) {this.dataDt = dataDt;}

    public int getActivityDuration() {return activityDuration;}
    public void setActivityDuration(int activityDuration) {this.activityDuration = activityDuration;}

    public int getStepcnt() {return stepcnt;}
    public void setStepcnt(int stepcnt) {this.stepcnt = stepcnt;}

    public double getActiveCalories() {return activeCalories;}
    public void setActiveCalories(double activeCalories) {this.activeCalories = activeCalories;}

    public double getDistance() {return distance;}
    public void setDistance(double distance) {this.distance = distance;}

    public int getMaxHeartRate() {return maxHeartRate;}

    public void setMaxHeartRate(int maxHeartRate) {
        this.maxHeartRate = maxHeartRate;
    }

    public double getIllumination() {
        return illu;
    }

    public void setIllumination(double illumination) {
        this.illu = illumination;
    }
}
