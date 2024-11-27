package com.Backend.MindBridge.dto;

public class StoreDTO {
    private Integer id;
    private String name;
    private Integer price;

    public StoreDTO(Integer id, String name, Integer price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public Integer getId() { return id; }

    public String getName() {
        return name;
    }

    public Integer getPrice() {
        return price;
    }
}
