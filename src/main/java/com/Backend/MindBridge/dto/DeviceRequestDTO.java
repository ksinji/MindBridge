package com.Backend.MindBridge.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDateTime;

public class DeviceRequestDTO {

    @JsonProperty("unitId")
    private String unitId;

    @JsonProperty("heartbeat")
    private int heartbeat;

    @JsonProperty("stepcnt")
    private int stepcnt;

    @JsonProperty("distance")
    private double distance;

    @JsonProperty("calorie")
    private double calorie;

    @JsonProperty("illu")
    private double illu;

    @JsonProperty("dataDt")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime dataDt;

    // 기본 생성자
    public DeviceRequestDTO() {}

    // Getter와 Setter
    public String getUnitId() {return unitId;}
    public void setUnitId(String unitId) {this.unitId = unitId;}

    public int getHeartbeat() {return heartbeat;}
    public void setHeartbeat(int heartbeat) {this.heartbeat = heartbeat;}

    public int getStepcnt() {return stepcnt;}
    public void setStepcnt(int stepcnt) {this.stepcnt = stepcnt;}

    public double getDistance() {return distance;}
    public void setDistance(double distance) {this.distance = distance;}

    public double getCalorie() {return calorie;}
    public void setCalorie(double calorie) {this.calorie = calorie;}

    public double getIllu() {return illu;}
    public void setIllu(double illu) {this.illu = illu;}

    public LocalDateTime getDataDt() {return dataDt;}
    public void setDataDt(LocalDateTime dataDt) {this.dataDt = dataDt;}
}

//하루 한번 특정시간(밤 12시)에 로드