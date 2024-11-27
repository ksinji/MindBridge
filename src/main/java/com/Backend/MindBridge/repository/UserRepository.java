package com.Backend.MindBridge.repository;

import com.Backend.MindBridge.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Integer> {
}
