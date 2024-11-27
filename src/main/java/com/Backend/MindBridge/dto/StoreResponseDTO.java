package com.Backend.MindBridge.dto;

import java.util.List;

public class StoreResponseDTO {
    private List<StoreDTO> products;  // 상품 목록
    private int userPoint;  // 사용자의 포인트

    // 생성자, 게터, 세터
    public StoreResponseDTO(List<StoreDTO> products, int userPoint) {
        this.products = products;
        this.userPoint = userPoint;
    }

    public List<StoreDTO> getProducts() {
        return products;
    }

    public void setProducts(List<StoreDTO> products) {
        this.products = products;
    }

    public int getUserPoint() {
        return userPoint;
    }

    public void setUserPoint(int userPoint) {
        this.userPoint = userPoint;
    }
}
