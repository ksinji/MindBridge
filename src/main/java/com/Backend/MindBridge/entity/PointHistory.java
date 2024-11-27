package com.Backend.MindBridge.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "point_history")
public class PointHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer transactionId;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "transaction_type")
    private String transactionType;

    @Column(name = "transaction_description")
    private String transactionDescription;

    @Column(name = "points")
    private Integer points;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // 기본 생성자
    public PointHistory() {
    }

    public PointHistory(Integer userId, String transactionType, String transactionDescription, int points, LocalDateTime createdAt) {
        this.userId = userId;
        this.transactionType = transactionType;
        this.transactionDescription = transactionDescription;
        this.points = points;
        this.createdAt = createdAt;
    }
}
