package com.example.angualar_spring.controller;

import com.example.angualar_spring.dto.DanhmucDTO;
import com.example.angualar_spring.dto.FindReq;
import com.example.angualar_spring.entity.Danhmuc;
import com.example.angualar_spring.mapper.DanhMucMapper;
import com.example.angualar_spring.service.IDanhMucService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/danhmuc")
public class DanhMucController {

    private IDanhMucService danhMucService;

    @Autowired
    public DanhMucController(IDanhMucService danhMucService) {
        this.danhMucService = danhMucService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Danhmuc>> findAll() {
        List<Danhmuc> danhmucList = danhMucService.findAll();
        System.out.println(danhmucList);
        if (danhmucList.isEmpty()) {
            System.out.println("Không có bản ghi nào");
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        }
        return ResponseEntity.ok(danhmucList);
    }

    @PostMapping("/create")
    public ResponseEntity<Danhmuc> create(@RequestBody Danhmuc danhmuc) {
        return new ResponseEntity<>(danhMucService.save(danhmuc), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Danhmuc> update(@RequestBody Danhmuc danhmuc) {
        return new ResponseEntity<Danhmuc>(danhMucService.update(danhmuc), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Danhmuc> delete(@PathVariable Integer id) {
        danhMucService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Danhmuc> findById(@PathVariable Integer id) {
        Danhmuc danhmuc = danhMucService.findByID(id);
        if (danhmuc == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(danhmuc, HttpStatus.OK);
    }

//    find
//    @PostMapping("/find")
//    public ResponseEntity<List<Danhmuc>> getFind(@RequestBody FindReq requet) {
//        List<Danhmuc> danhmucList = danhMucService.getFind(requet);
//        if (danhmucList.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return ResponseEntity.ok(danhmucList);
//    }
    @PostMapping("find")
//    public DanhmucDTO find(@RequestBody FindReq requet) {
//        List<Danhmuc> list = danhMucService.getFind(requet);
//        return new DanhmucDTO(DanhMucMapper.toListDTO(list));
//    }
    public List<Danhmuc> find(@RequestBody FindReq requet) {
        List<Danhmuc> list = danhMucService.getFind(requet);
        return list;
    }
}
