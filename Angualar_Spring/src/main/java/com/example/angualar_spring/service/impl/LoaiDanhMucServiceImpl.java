package com.example.angualar_spring.service.impl;

import com.example.angualar_spring.dto.FindReq;
import com.example.angualar_spring.entity.Danhmuc;
import com.example.angualar_spring.entity.Loaidanhmuc;
import com.example.angualar_spring.repo.LoaiDanhMucRepo;
import com.example.angualar_spring.service.ILoaiDanhMucService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoaiDanhMucServiceImpl implements ILoaiDanhMucService {
    private final LoaiDanhMucRepo repo;

    public LoaiDanhMucServiceImpl(LoaiDanhMucRepo repo) {
        this.repo = repo;
    }


    @Override
    public List<Loaidanhmuc> findAll() {
        return repo.findAll();
    }

    @Override
    public Loaidanhmuc save(Loaidanhmuc loaiDanhMuc) {
        return repo.save(loaiDanhMuc);
    }

    @Override
    public Loaidanhmuc update(Loaidanhmuc loaiDanhMuc) {
        return repo.save(loaiDanhMuc);
    }

    @Override
    public void delete(Integer id) {
        repo.deleteById(id);
    }

    @Override
    public Loaidanhmuc findByID(Integer id) {
        return repo.findById(id).get();
    }

    @Override
    public List<Loaidanhmuc> getFind(FindReq requet) {
        if (requet.getTen() == null && requet.getMa() == null && requet.getTrangThai() == null) {
            return this.findAll();
        } else {
            if (requet.getTen() == null && requet.getMa() == null) {
                return this.repo.findLoaiDanhMucByTrangThai(requet.getTrangThai());
            } else if (requet.getMa() == null && requet.getTrangThai() == null) {
                return this.repo.findLoaiDanhMucByTen(requet.getTen());
            } else if (requet.getTen() == null && requet.getTrangThai() == null) {
                return this.repo.findLoaiDanhMucByMa(String.valueOf(requet.getMa()));
            } else {

                if (requet.getTen() == null) {
                    return this.repo.findLoaiDanhMucByMaAndTrangThai(requet.getTrangThai(), String.valueOf(requet.getMa()));
                }
                if (requet.getMa() == null) {
                    return this.repo.findLoaiDanhMucByTenAndTrangThai(requet.getTen(), requet.getTrangThai());
                }
                if (requet.getTrangThai() == null) {
                    return this.repo.findLoaiDanhMucByTenAndMa(requet.getTen(), String.valueOf(requet.getMa()));
                }

            }
        }
        return this.repo.findLoaiDanhMucByTenAndMaAndTrangThai(requet.getTen(), requet.getTrangThai(), String.valueOf(requet.getMa()));

    }
}
