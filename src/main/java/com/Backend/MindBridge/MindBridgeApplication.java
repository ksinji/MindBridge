package com.Backend.MindBridge;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MindBridgeApplication {

	public static void main(String[] args) {
		// .env 파일에서 환경 변수 로드
		Dotenv dotenv = Dotenv.load();
		System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
		System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));

		// Spring Boot 애플리케이션 실행
		SpringApplication.run(MindBridgeApplication.class, args);
	}

}
