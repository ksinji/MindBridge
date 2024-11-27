package com.Backend.MindBridge.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "shop_items")
public class ShopItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Long itemId;

    @ManyToOne
    @JoinColumn(name = "code_id", referencedColumnName = "code_id")
    private CommonCode commonCode;

    @Column(name = "price")
    private int price;

    public Long getItemId() {
        return itemId;
    }

    public CommonCode getCommonCode() {
        return commonCode;
    }

    public int getPrice() {
        return price;
    }
}
