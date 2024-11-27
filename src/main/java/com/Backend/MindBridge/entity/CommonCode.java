package com.Backend.MindBridge.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "common_codes")
public class CommonCode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "code_id")
    private Long codeId;

    @ManyToOne
    @JoinColumn(name = "code_type_id", referencedColumnName = "code_type_id")
    private CommonCodeType commonCodeType;

    @Column(name = "code_name")
    private String codeName;

    @Column(name = "description")
    private String description;

    // Getter methods
    public String getCodeName() {
        return codeName;
    }

    public String getDescription() {
        return description;
    }
}
