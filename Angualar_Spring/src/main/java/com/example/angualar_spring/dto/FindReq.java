package com.example.angualar_spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FindReq {
    private Integer trangThai;
    private String ten;
    private Integer ma;
}
