import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShadowTestComponent } from '../shadow-test/shadow-test.component';

import { TableDataComponent } from './table-data.component';

const routes: Routes = [
  { path: '', component: TableDataComponent },
  { path: 'test', component: ShadowTestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableDataRoutingModule { }
