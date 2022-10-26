import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoaidanhmucRoutingModule} from './loaidanhmuc-routing.module';
import {LoaidanhmucComponent} from './loaidanhmuc.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../../shared/shared.module";
import {MatRadioModule} from "@angular/material/radio";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {MatSelectModule} from "@angular/material/select";
import {LoaidanhmucService} from "../../../shared/services/loaidanhmuc.service";


@NgModule({
  declarations: [
    LoaidanhmucComponent
  ],
  imports: [
    CommonModule,
    LoaidanhmucRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      MatExpansionModule,
      MatFormFieldModule,
      MatInputModule,
      SharedModule,
      MatRadioModule,
      NgxDatatableModule,
      MatSelectModule,
  ],
    providers: [LoaidanhmucService],
})
export class LoaidanhmucModule { }
