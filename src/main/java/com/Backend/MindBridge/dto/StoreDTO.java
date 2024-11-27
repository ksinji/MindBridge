package com.Backend.MindBridge.dto;

public class StoreDTO {
    private String name;
    private int price;

    public StoreDTO(String name, int price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }
}
