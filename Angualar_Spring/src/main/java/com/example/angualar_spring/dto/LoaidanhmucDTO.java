package com.example.angualar_spring.dto;

import com.example.angualar_spring.entity.Loaidanhmuc;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoaidanhmucDTO {
    private Integer id;
    private String ma;
    private String tenTv;
    private String tenEn;
    private java.sql.Date ngayHl;
    private java.sql.Date ngayHhl;
    private Integer trangThai;
    public LoaidanhmucDTO(List<Loaidanhmuc> toListDTO) {
    }
}
