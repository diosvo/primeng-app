import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { TableDataRoutingModule } from './table-data-routing.module';
import { TableDataComponent } from './table-data.component';

@NgModule({
  declarations: [TableDataComponent],
  imports: [
    CommonModule,
    TableModule,
    TableDataRoutingModule
  ]
})
export class TableDataModule { }
