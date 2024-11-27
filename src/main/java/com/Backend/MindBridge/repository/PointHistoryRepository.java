package com.Backend.MindBridge.repository;

import com.Backend.MindBridge.entity.PointHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PointHistoryRepository extends JpaRepository<PointHistory, Integer> {
    List<PointHistory> findByUserIdOrderByCreatedAtDesc(Integer userId);
}

