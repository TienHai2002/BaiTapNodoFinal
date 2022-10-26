package com.example.angualar_spring.mapper;


import com.example.angualar_spring.dto.DanhmucDTO;
import com.example.angualar_spring.entity.Danhmuc;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

public class DanhMucMapper{
    private static DanhMucMapper INSTANCE;

    public static DanhMucMapper getInstance() {
        if (INSTANCE == null) {
            INSTANCE = new DanhMucMapper();
        }

        return INSTANCE;
    }

    public DanhMucMapper() {
    }

    public static DanhmucDTO toDTO(Danhmuc dm) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(dm, DanhmucDTO.class);
    }

    public static Danhmuc toEntity(DanhMucMapper cateDTO) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(cateDTO, Danhmuc.class);
    }

    public static List<DanhmucDTO> toListDTO(List<Danhmuc> entityList) {
        List<DanhmucDTO> list = new ArrayList<>();
        for (Danhmuc e : entityList) {
            list.add(DanhMucMapper.toDTO(e));
        }
        return list;
    }
}
