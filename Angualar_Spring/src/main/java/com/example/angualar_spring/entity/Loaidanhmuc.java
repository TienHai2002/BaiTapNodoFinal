package com.example.angualar_spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "loaidanhmuc")
public class Loaidanhmuc {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "ma")
    private String ma;

    @Column(name = "tenTV")
    private String tenTv;

    @Column(name = "tenEN")
    private String tenEn;

    @Column(name = "ngayHL")
    private java.sql.Date ngayHl;

    @Column(name = "ngayHHL")
    private java.sql.Date ngayHhl;

    @Column(name = "trangThai")
    private Integer trangThai;
}
