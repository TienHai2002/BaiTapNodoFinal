package com.example.angualar_spring.service.impl;

import com.example.angualar_spring.dto.FindReq;
import com.example.angualar_spring.entity.Danhmuc;
import com.example.angualar_spring.repo.DanhMucRepo;
import com.example.angualar_spring.service.IDanhMucService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DanhMucServiceImpl implements IDanhMucService {
    private final DanhMucRepo repo;

    public DanhMucServiceImpl(DanhMucRepo repo) {
        this.repo = repo;
    }


    @Override
    public List<Danhmuc> findAll() {
        return repo.findAll();
    }

    @Override
    public Danhmuc save(Danhmuc danhmuc) {
        return repo.save(danhmuc);
    }

    @Override
    public Danhmuc update(Danhmuc danhmuc) {
        return repo.save(danhmuc);
    }

    @Override
    public void delete(Integer id) {
        repo.deleteById(id);
    }

    @Override
    public Danhmuc findByID(Integer id) {
        return repo.findById(id).get();
    }

    @Override
    public List<Danhmuc> getFind(FindReq requet) {
        if (requet.getTen() == null && requet.getMa() == null && requet.getTrangThai() == null) {
            return this.findAll();
        } else {
            if (requet.getTen() == null && requet.getMa() == null) {
                return this.repo.findDanhMucEntityByTrangThai(requet.getTrangThai());
            } else if (requet.getMa() == null && requet.getTrangThai() == null) {
                return this.repo.findDanhMucEntityByTen(requet.getTen());
            } else if (requet.getTen() == null && requet.getTrangThai() == null) {
                return this.repo.findDanhMucEntityByMa(String.valueOf(requet.getMa()));
            } else {

                if (requet.getTen() == null) {
                    return this.repo.findDanhMucEntityByMaAndTrangThai(requet.getTrangThai(), String.valueOf(requet.getMa()));
                }
                if (requet.getMa() == null) {
                    return this.repo.findDanhMucEntityByTenAndTrangThai(requet.getTen(), requet.getTrangThai());
                }
                if (requet.getTrangThai() == null) {
                    return this.repo.findDanhMucEntityByTenAndMa(requet.getTen(), String.valueOf(requet.getMa()));
                }

            }
        }
        return this.repo.findDanhMucEntityByTenAndMaAndTrangThai(requet.getTen(), requet.getTrangThai(), String.valueOf(requet.getMa()));

    }
}
