import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Page} from 'src/app/shared/model/page';
import {DanhMucService} from '../../../shared/services/danhmuc.service';
import {LoaidanhmucService} from "../../../shared/services/loaidanhmuc.service";
import Swal from 'sweetalert2';
import {MatTableDataSource} from "@angular/material/table";


@Component({
    selector: 'app-danhmuc',
    templateUrl: './danhmuc.component.html',
    styleUrls: ['./danhmuc.component.scss'],
})

export class DanhmucComponent implements OnInit {
    listDanhMuc: any
    listLoaiDanhMuc: any
    items = [];
    itemDM: any;
    page = new Page();
    columns = [
        {name: 'STT', prop: 'index', flexGrow: 1.5},
        {name: 'MaDanhMuc', prop: 'maDm', flexGrow: 1.5},
        {name: 'Ma', prop: 'ma', flexGrow: 1.5},
        {name: 'TênTV', prop: 'tenTv', flexGrow: 2},
        {name: 'TênEN', prop: 'tenEn', flexGrow: 2},
        {name: 'Thứ Tự', prop: 'thuTu', flexGrow: 3},
        {name: 'Group', prop: 'nhom', flexGrow: 2},
        {name: 'Ngày Hiệu Lựu', prop: 'ngayHl', flexGrow: 2},
        {name: 'Ngày Hết Hiệu Lực', prop: 'ngayHhl', flexGrow: 2},
        {name: 'Trạng Thái', prop: 'trangThai', flexGrow: 3},
        {name: 'Actions', prop: 'actions', flexGrow: 4},
    ];

    formGroup = this.fb.group({
        id: [''],
        maDm: [''],
        ma: [''],
        tenTv: [''],
        tenEn: [''],
        thuTu: [''],
        nhom: [''],
        ngayHl: [''],
        ngayHhl: [''],
        trangThai: [''],
    });


    constructor(
        private fb: FormBuilder,
        private loaidanhmucService: LoaidanhmucService,
        private toastrService: ToastrService,
        private danhMucService: DanhMucService,
    ) {
    }

    ngOnInit(): void {
        this.prepareData();
        this.getLDM();
        this.getList();


    }


    getLDM() {
        this.loaidanhmucService.getLoaiDanhMuc().subscribe((next: any) => {
            console.log('next', next);
            this.itemDM = next;
        });
    }

    prepareData() {
        this.getDanhMuc();
    }


    doSubmit() {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) {
            return;
        }

        if (this.formGroup.getRawValue().id) {
            this.danhMucService.updateDanhMuc(this.formGroup.getRawValue()).subscribe(
                {
                    next: () => {
                        this.toastrService.success(`Successful`);
                        this.formGroup.reset();
                        this.getDanhMuc();
                    },
                    error: (error) => {
                        this.toastrService.error(`Failed !!!`);
                        console.error(error);
                    },
                }
            );

        } else {
            this.danhMucService.addDanhMuc(this.formGroup.getRawValue()).subscribe(
                (_) => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getDanhMuc();
                },
                (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            );
        }
    }

    getDanhMuc() {
        this.danhMucService.getDanhMuc().subscribe((next: any) => {
            console.log('next', next);
            this.items = next;
        });
    }

    edit(row: any) {
        this.formGroup.patchValue({
            id: row.id,
            maDm: row.maDm,
            ma: row.ma,
            tenTv: row.tenTv,
            tenEn: row.tenEn,
            thuTu: row.thuTu,
            nhom: row.nhom,
            ngayHl: row.ngayHl,
            ngayHhl: row.ngayHhl,
            trangThai: row.trangThai,

        });
    }

    delete(id: any) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.danhMucService.deleteDanhMuc(id).subscribe({
                    next: () => {
                        this.toastrService.success('Successful');
                        this.formGroup.reset();
                        this.getDanhMuc();
                    },
                    error: (error) => {
                        this.toastrService.error('Failed !!!');
                        console.error(error);
                    },
                });
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    resetForm() {
        this.formGroup.reset();
    }

//find
    formFind = this.fb.group({
        tenTv: [],
        ma: [],
        trangThai: []
    })

    fin() {
        console.log(this.formFind.value)
        this.danhMucService.findDanhMuc(this.formFind.value).subscribe(resp => {
            this.items = resp;
            console.log("find Danh mục", resp);
        });
    }

    getList() {
        this.danhMucService.getDanhMuc().subscribe(resp => {
            this.listDanhMuc = resp.data;
        });

    }

    // getDMbyTen(ma: number) {
    //    return this.itemDM.filter((x: { id: number; }) => x.id == ma);
    // }

}
