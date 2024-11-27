package com.Backend.MindBridge.repository;

import com.Backend.MindBridge.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {
    Users findByUserId(Integer userId);
}
