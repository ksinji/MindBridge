package com.Backend.MindBridge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Backend.MindBridge.entity.ShopItem;
import org.springframework.stereotype.Repository;

@Repository
public interface ShopItemRepository extends JpaRepository<ShopItem, Integer> {
}
