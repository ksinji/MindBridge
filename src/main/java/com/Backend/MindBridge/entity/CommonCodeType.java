package com.Backend.MindBridge.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "common_code_types")
public class CommonCodeType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "code_type_id")
    private Long codeTypeId;

    @Column(name = "type_name")
    private String typeName;

    public String getTypeName() {
        return typeName;
    }
}
