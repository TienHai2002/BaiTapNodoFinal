import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DanhmucComponent } from './danhmuc.component';

const routes: Routes = [{ path: '', component: DanhmucComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhmucRoutingModule { }
