package com.Backend.MindBridge.service;

import com.Backend.MindBridge.dto.DeviceDTO;
import com.Backend.MindBridge.dto.DeviceRequestDTO;
import com.Backend.MindBridge.entity.WearDeviceData;
import com.Backend.MindBridge.repository.DeviceRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DataAccessException;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DeviceService {
    private static final Logger logger = LoggerFactory.getLogger(DeviceService.class);
    @Autowired
    private DeviceRepository deviceRepository;

    @Autowired
    private RestTemplate restTemplate;

    @Value("${external.api.url}")
    private String apiUrl;

    public void fetchDataAndSave(DeviceRequestDTO requestDTO) {
        try {
            // 헤더 설정
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            // 요청 본문 설정
            HttpEntity<DeviceRequestDTO> entity = new HttpEntity<>(requestDTO, headers);

            // API에 POST 요청을 보내고, JSON 응답을 받음
            ResponseEntity<String> response = restTemplate.exchange(
                    apiUrl,
                    HttpMethod.POST,
                    entity,
                    String.class
            );

            if (response.getStatusCode().is2xxSuccessful()) {
                String jsonResponse = response.getBody();

                logger.info("API 응답 데이터: {}", jsonResponse);

            // JSON 응답을 DeviceDTO 리스트로 변환
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.registerModule(new JavaTimeModule()); // LocalDateTime 지원
            objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

            List<DeviceDTO> deviceDTOList = objectMapper.readValue(
                    jsonResponse,
                    new TypeReference<List<DeviceDTO>>() {}
            );

            // DTO 리스트를 엔티티 리스트로 변환
            List<WearDeviceData> entityList = deviceDTOList.stream()
                    .map(this::mapDtoToEntity)
                    .collect(Collectors.toList());

            // 엔티티 리스트를 데이터베이스에 저장
            deviceRepository.saveAll(entityList);
            } else {
                logger.error("API 호출 실패: 상태 코드 = {}", response.getStatusCode());
                // 필요에 따라 예외를 발생시키거나 반환
                throw new RestClientException("API 호출 실패");
            }
        } catch (RestClientException e) {
            // REST 호출 관련 예외 처리
            logger.error("REST API 호출 중 오류 발생: {}", e.getMessage());
        } catch (JsonProcessingException e) {
            // JSON 파싱 관련 예외 처리
            logger.error("JSON 파싱 중 오류 발생: {}", e.getMessage());
        } catch (DataAccessException e) {
            // 데이터베이스 접근 예외 처리
            logger.error("데이터베이스 저장 중 오류 발생: {}", e.getMessage());
        } catch (Exception e) {
            // 기타 예외 처리
            logger.error("알 수 없는 오류 발생: {}", e.getMessage());
        }
    }

    private WearDeviceData mapDtoToEntity(DeviceDTO dto) {
        WearDeviceData entity = new WearDeviceData();

        entity.setUnitId(dto.getUnitId());
        entity.setMaxHeartRate(dto.getHeartbeat());
        entity.setStepcnt(dto.getStepcnt());
        entity.setDistance(dto.getDistance());
        entity.setActiveCalories(dto.getCalorie());
        entity.setIllumination(dto.getIllu());
        entity.setDataDt(dto.getDataDt());

        return entity;
    }
}
