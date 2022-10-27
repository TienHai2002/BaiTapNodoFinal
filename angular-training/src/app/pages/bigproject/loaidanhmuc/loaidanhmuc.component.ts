import {Component, OnInit} from '@angular/core';
import {Page} from "../../../shared/model/page";
import {FormBuilder, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import Swal from "sweetalert2";
import {LoaidanhmucService} from "../../../shared/services/loaidanhmuc.service";
import {DanhMucService} from 'src/app/shared/services/danhmuc.service';
import {MatDialog} from '@angular/material/dialog';
import * as XLSX from "xlsx";
type AOA = any[][];
type AOALDM = any[][];

@Component({
    selector: 'app-loaidanhmuc',
    templateUrl: './loaidanhmuc.component.html',
    styleUrls: ['./loaidanhmuc.component.scss']
})
export class LoaidanhmucComponent implements OnInit {

    items = [];
    limit = [];
    page = new Page();
    page1 = new Page();

    data: AOA = [[],[]];
    dataLDM : AOALDM = [[],[]];
    columns = [
        {name: 'STT', prop: 'index', flexGrow: 1.5},
        {name: 'Mã', prop: 'ma', flexGrow: 3},
        {name: 'Tên Tiếng Việt', prop: 'tenTv', flexGrow: 3},
        {name: 'Tên Tiếng Anh', prop: 'tenEn', flexGrow: 3},
        {name: 'Ngày Hiệu Lực', prop: 'ngayHl', flexGrow: 3},
        {name: 'Ngày Hết Hiệu Lực', prop: 'ngayHhl', flexGrow: 3},
        {name: 'Trạng Thái', prop: 'trangThai', flexGrow: 3},
        {name: 'Actions', prop: 'actions', flexGrow: 4},
    ];

    formGroup = this.fb.group({
        id: [''],
        ma: ['', [Validators.required]],
        tenTv: ['', [Validators.required]],
        tenEn: ['', [Validators.required]],
        ngayHl: ['', [Validators.required]],
        ngayHhl: ['', [Validators.required]],
        trangThai: ['', [Validators.required]],
    });

    constructor(
        private fb: FormBuilder,
        private fb1: FormBuilder,
        private loaidanhmucService: LoaidanhmucService,
        private toastrService: ToastrService,
        private danhMucService: DanhMucService,
    ) {
    }

    ngOnInit(): void {
        this.prepareData();
        this.getLDM1();
    }

    prepareData() {
        this.getLoaiDanhMuc();
        this.getDanhMuc1();
    }

    doSubmit() {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) {
            return;
        }
        if (this.formGroup.value.ngayHl > this.formGroup.value.ngayHhl) {
            this.toastrService.error('Ngày hiệu lực phải nhỏ hơn ngày hết hiệu lực');
            return;
        }
        for (let i = 0; i < this.items.length; i++) {
            if (this.formGroup.value.ma === this.formGroup.value.ma) {
                this.toastrService.error('Mã đã tồn tại');
                this.resetForm();
                return;
            }
        }
        if (this.formGroup.getRawValue().id) {
            this.loaidanhmucService.updateLoaiDanhMuc(
                this.formGroup.getRawValue()
            ).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getLoaiDanhMuc();
                },
                error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                },
            });
        } else {
            this.loaidanhmucService.addLoaiDanhMuc(
                this.formGroup.getRawValue()
            ).subscribe(
                (_) => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getLoaiDanhMuc();
                },
                (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            );
        }
    }


    getLoaiDanhMuc() {
        this.loaidanhmucService.getLoaiDanhMuc().subscribe((next: any) => {
            console.log('next', next);
            this.items = next;
        });
    }

    edit(row: any) {
        this.formGroup.patchValue(row);
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
                this.loaidanhmucService.deleteLoaiDanhMuc(id).subscribe({
                    next: () => {
                        this.toastrService.success('Successful');
                        this.formGroup.reset();
                        this.getLoaiDanhMuc();
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

    itemsDM = [];
    itemDM: any;
    columns1 = [
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

    formGroup1 = this.fb.group({
        id: [''],
        maDm: ['', [Validators.required]],
        ma: ['', [Validators.required]],
        tenTv: ['', [Validators.required]],
        tenEn: ['', [Validators.required]],
        thuTu: [''],
        nhom: [''],
        ngayHl: ['', [Validators.required]],
        ngayHhl: ['', [Validators.required]],
        trangThai: ['', [Validators.required]],
    });

    getLDM1() {
        this.loaidanhmucService.getLoaiDanhMuc().subscribe((next: any) => {
            console.log('next', next);
            this.itemDM = next;
        });
    }

    doSubmit1() {
        this.formGroup1.markAllAsTouched();
        if (this.formGroup1.invalid) {
            return;
        }
        if (this.formGroup1.value.ngayHl > this.formGroup1.value.ngayHhl) {
            this.toastrService.error('Ngày hiệu lực phải nhỏ hơn ngày hết hiệu lực');
            return;
        }
        if (this.formGroup1.getRawValue().id) {
            this.danhMucService.updateDanhMuc(this.formGroup1.getRawValue()).subscribe(
                {
                    next: () => {
                        this.toastrService.success(`Successful`);
                        this.formGroup1.reset();
                        this.getDanhMuc1();
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
                    this.getDanhMuc1();
                },
                (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            );
        }
    }

    getDanhMuc1() {
        this.danhMucService.getDanhMuc().subscribe((next: any) => {
            console.log('next', next);
            this.itemsDM = next;
        });
    }

    edit1(row: any) {
        this.formGroup1.patchValue({
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

    delete1(id: any) {
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
                        this.formGroup1.reset();
                        this.getDanhMuc1();
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

    resetForm1() {
        //dosubmit reset

        this.formGroup1.reset();
    }
    formFind = this.fb.group({
        tenTv: [],
        ma: [],
        trangThai: []
    })

    finDM() {
        console.log(this.formFind.value)
        this.danhMucService.findDanhMuc(this.formFind.value).subscribe(resp => {
            this.itemsDM = resp;
            console.log("find Danh mục", resp);
        });
    }
    finLDM() {
        console.log(this.formFind.value)
        this.danhMucService.findDanhMuc(this.formFind.value).subscribe(resp => {
            this.items = resp;
            console.log("find Danh mục", resp);
        });
    }
    onTableDataChange(event: any) {
        this.items;
    }
    clickRowTable(item: any) {
        this.itemsDM = item.itemDM;
    }
    wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
    fileName: string = 'SheetJS.xlsx';
    onFileChange(evt: any) {
        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(evt.target);
        if (target.files.length !== 1) throw new Error('Cannot use multiple files');
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            /* read workbook */
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

            /* grab first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];

            /* save data */
            this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
            console.log(this.data);
        };
        reader.readAsBinaryString(target.files[0]);
    }


    export(): void {
        /* generate worksheet */
        const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        /* save to file */
        XLSX.writeFile(wb, this.fileName);
    }
}
