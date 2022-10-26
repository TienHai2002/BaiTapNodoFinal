import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaidanhmucComponent } from './loaidanhmuc.component';

const routes: Routes = [{ path: '', component: LoaidanhmucComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoaidanhmucRoutingModule { }
