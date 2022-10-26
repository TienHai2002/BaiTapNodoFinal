package com.example.angualar_spring.dto;

import com.example.angualar_spring.entity.Loaidanhmuc;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DanhmucDTO {
    private Integer id;
    private Integer ma;
    private Integer maDm;
    private String tenTv;
    private String tenEn;
    private String nhom;
    private java.sql.Date ngayHl;
    private java.sql.Date ngayHhl;
    private Integer trangThai;
    private Integer thuTu;
    private Loaidanhmuc loaidanhmuc;

    public DanhmucDTO(List<DanhmucDTO> toListDTO) {
    }

}
