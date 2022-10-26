package com.example.angualar_spring.mapper;


import com.example.angualar_spring.dto.LoaidanhmucDTO;
import com.example.angualar_spring.entity.Loaidanhmuc;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

public class LoaiDanhMucMapper {
    private static LoaiDanhMucMapper INSTANCE;

    public static LoaiDanhMucMapper getInstance() {
        if (INSTANCE == null) {
            INSTANCE = new LoaiDanhMucMapper();
        }

        return INSTANCE;
    }

    public LoaiDanhMucMapper() {
    }

    public static LoaidanhmucDTO toDTO(Loaidanhmuc entity) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(entity, LoaidanhmucDTO.class);
    }

    public static Loaidanhmuc toEntity(LoaiDanhMucMapper ldmDto) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(ldmDto, Loaidanhmuc.class);
    }



    public static List<LoaidanhmucDTO> toListDTO(List<Loaidanhmuc> entityList) {
        List<LoaidanhmucDTO> list = new ArrayList<>();
        for (Loaidanhmuc e : entityList) {
            list.add(LoaiDanhMucMapper.toDTO(e));
        }
        return list;
    }
}
