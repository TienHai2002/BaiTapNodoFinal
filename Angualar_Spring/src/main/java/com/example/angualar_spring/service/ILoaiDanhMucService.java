package com.example.angualar_spring.service;

import com.example.angualar_spring.dto.FindReq;
import com.example.angualar_spring.entity.Danhmuc;
import com.example.angualar_spring.entity.Loaidanhmuc;

import java.util.List;


public interface ILoaiDanhMucService {
    List<Loaidanhmuc> findAll();

    Loaidanhmuc save(Loaidanhmuc loaidanhmuc);

    Loaidanhmuc update(Loaidanhmuc loaidanhmuc);

    void delete(Integer id);

    Loaidanhmuc findByID(Integer id);
    public List<Loaidanhmuc> getFind(FindReq requet);
}
