package com.Backend.MindBridge.dto;

public class StoreDTO {
    private String name;
    private Integer price;

    public StoreDTO(String name, Integer price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public Integer getPrice() {
        return price;
    }
}
