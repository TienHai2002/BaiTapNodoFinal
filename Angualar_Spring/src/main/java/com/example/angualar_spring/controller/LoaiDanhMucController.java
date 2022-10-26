package com.example.angualar_spring.controller;

import com.example.angualar_spring.dto.FindReq;
import com.example.angualar_spring.entity.Danhmuc;
import com.example.angualar_spring.entity.Loaidanhmuc;
import com.example.angualar_spring.service.ILoaiDanhMucService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/loaidanhmuc")
public class LoaiDanhMucController {
    @Autowired
    private ILoaiDanhMucService loaiDanhMucService;

    @GetMapping("/all")
    public ResponseEntity<List<Loaidanhmuc>> findAll() {
        List<Loaidanhmuc> loaidanhmucList = loaiDanhMucService.findAll();
        if (loaidanhmucList.isEmpty()) {
            System.out.println("Không có bản ghi nào");
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        }
        return new ResponseEntity<>(loaidanhmucList, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Loaidanhmuc> create(@RequestBody Loaidanhmuc loaidanhmuc) {
        return new ResponseEntity<>(loaiDanhMucService.save(loaidanhmuc), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Loaidanhmuc> update(@RequestBody Loaidanhmuc loaidanhmuc) {
        return new ResponseEntity<Loaidanhmuc>(loaiDanhMucService.update(loaidanhmuc), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Loaidanhmuc> delete(@PathVariable Integer id) {
        loaiDanhMucService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Loaidanhmuc> findById(@PathVariable Integer id) {
        Loaidanhmuc loaidanhmuc = loaiDanhMucService.findByID(id);
        if (loaidanhmuc == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(loaidanhmuc, HttpStatus.OK);
    }
    public List<Loaidanhmuc> find(@RequestBody FindReq requet) {
        List<Loaidanhmuc> list = loaiDanhMucService.getFind(requet);
        return list;
    }
}
