package com.Backend.MindBridge.repository;

import com.Backend.MindBridge.entity.WearDeviceData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceRepository extends JpaRepository<WearDeviceData, Integer> {
    // 필요한 경우, 추가적인 쿼리 메서드를 정의할 수 있습니다.
}
