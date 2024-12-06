package com.Backend.MindBridge.controller;

import com.Backend.MindBridge.dto.DeviceRequestDTO;
import com.Backend.MindBridge.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class DeviceController {

    @Autowired
    private DeviceService deviceService;

    @PostMapping("/send-device-data")
    public ResponseEntity<String> sendDeviceData(@RequestBody DeviceRequestDTO requestDTO) {
        deviceService.fetchDataAndSave(requestDTO);
        return ResponseEntity.ok("Device data sent and response saved successfully");
    }
}
