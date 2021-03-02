import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { TableDataRoutingModule } from './table-data-routing.module';
import { TableDataComponent } from './table-data.component';

import { TestComponent } from '../test/test.component';
import { ShadowTestComponent } from '../shadow-test/shadow-test.component';

@NgModule({
  declarations: [TableDataComponent, TestComponent, ShadowTestComponent],
  imports: [
    CommonModule,
    FormsModule,

    TableModule,
    DropdownModule,
    ButtonModule,
    TableDataRoutingModule
  ]
})
export class TableDataModule { }
