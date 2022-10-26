package com.example.angualar_spring.repo;

import com.example.angualar_spring.entity.Danhmuc;
import com.example.angualar_spring.entity.Loaidanhmuc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoaiDanhMucRepo extends JpaRepository<Loaidanhmuc, Integer> {

    Loaidanhmuc findById(String id);
    @Query("select e from Loaidanhmuc e where e.tenTv like %:tenTv% and e.trangThai = :trangThai and e.ma like %:ma%")
    public List<Loaidanhmuc> findLoaiDanhMucByTenAndMaAndTrangThai(@Param("tenTv") String ten, @Param("trangThai") Integer trangThai, @Param("ma") String ma );

    @Query("select e from Loaidanhmuc e where e.tenTv like %:tenTv% and e.trangThai = :trangThai")
    public List<Loaidanhmuc> findLoaiDanhMucByTenAndTrangThai(@Param("tenTv") String ten,@Param("trangThai") Integer trangThai);

    @Query("select e from Loaidanhmuc e where e.tenTv like %:tenTv% and e.ma like %:ma%")
    public List<Loaidanhmuc> findLoaiDanhMucByTenAndMa(@Param("tenTv") String ten, @Param("ma") String ma );

    @Query("select e from Loaidanhmuc e where e.tenTv like %:tenTv%")
    public List<Loaidanhmuc> findLoaiDanhMucByTen(@Param("tenTv") String ten);
    //
    @Query("select e from Loaidanhmuc e where e.ma like %:ma%")
    public List<Loaidanhmuc> findLoaiDanhMucByMa(@Param("ma") String ma );
    //
    @Query("select e from Loaidanhmuc e where e.trangThai = :trangThai")
    public List<Loaidanhmuc> findLoaiDanhMucByTrangThai(@Param("trangThai") Integer trangThai);

    @Query("select e from Loaidanhmuc e where  e.trangThai = :trangThai and e.ma like %:ma%")
    public List<Loaidanhmuc> findLoaiDanhMucByMaAndTrangThai(@Param("trangThai") Integer trangThai,@Param("ma") String ma );


}
