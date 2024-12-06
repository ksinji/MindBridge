package com.Backend.MindBridge;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling // 스케줄러 활성화
public class MindBridgeApplication {

	public static void main(String[] args) {
		// .env 파일에서 환경 변수 로드
		Dotenv dotenv = Dotenv.load();
		System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
		System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
		System.setProperty("URL_NAME", dotenv.get("URL_NAME"));
		// Spring Boot 애플리케이션 실행
		SpringApplication.run(MindBridgeApplication.class, args);
	}
}
