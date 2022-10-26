import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DanhmucRoutingModule} from './danhmuc-routing.module';
import {DanhmucComponent} from './danhmuc.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../../shared/shared.module";
import {MatRadioModule} from "@angular/material/radio";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {MatSelectModule} from "@angular/material/select";
import {DanhMucService} from "../../../shared/services/danhmuc.service";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [
        DanhmucComponent
    ],
    imports: [
        CommonModule,
        DanhmucRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        SharedModule,
        MatRadioModule,
        NgxDatatableModule,
        MatSelectModule,
        MatTableModule,
        MatIconModule,

    ],
    providers: [DanhMucService],
})
export class DanhmucModule {
}
