package com.example.angualar_spring.repo;

import com.example.angualar_spring.entity.Danhmuc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DanhMucRepo extends JpaRepository<Danhmuc, Integer> {


    Danhmuc findById(String id);

    @Query("select e from Danhmuc e where e.tenTv like %:tenTv% and e.trangThai = :trangThai and e.ma like %:ma%")
    public List<Danhmuc> findDanhMucEntityByTenAndMaAndTrangThai(@Param("tenTv") String ten, @Param("trangThai") Integer trangThai, @Param("ma") String ma );

    @Query("select e from Danhmuc e where e.tenTv like %:tenTv% and e.trangThai = :trangThai")
    public List<Danhmuc> findDanhMucEntityByTenAndTrangThai(@Param("tenTv") String ten,@Param("trangThai") Integer trangThai);

    @Query("select e from Danhmuc e where e.tenTv like %:tenTv% and e.ma like %:ma%")
    public List<Danhmuc> findDanhMucEntityByTenAndMa(@Param("tenTv") String ten, @Param("ma") String ma );

    @Query("select e from Danhmuc e where e.tenTv like %:tenTv%")
    public List<Danhmuc> findDanhMucEntityByTen(@Param("tenTv") String ten);
    //
    @Query("select e from Danhmuc e where e.ma like %:ma%")
    public List<Danhmuc> findDanhMucEntityByMa(@Param("ma") String ma );
    //
    @Query("select e from Danhmuc e where e.trangThai = :trangThai")
    public List<Danhmuc> findDanhMucEntityByTrangThai(@Param("trangThai") Integer trangThai);

    @Query("select e from Danhmuc e where  e.trangThai = :trangThai and e.ma like %:ma%")
    public List<Danhmuc> findDanhMucEntityByMaAndTrangThai(@Param("trangThai") Integer trangThai,@Param("ma") String ma );

}
