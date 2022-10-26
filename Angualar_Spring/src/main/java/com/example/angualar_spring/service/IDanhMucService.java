package com.example.angualar_spring.service;



import com.example.angualar_spring.dto.FindReq;
import com.example.angualar_spring.entity.Danhmuc;

import java.util.List;


public interface IDanhMucService {
    List<Danhmuc> findAll();

    Danhmuc save(Danhmuc danhmuc);

    Danhmuc update(Danhmuc danhmuc);

    void delete(Integer id);

    Danhmuc findByID(Integer id);
    public List<Danhmuc> getFind(FindReq requet);
}
