import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';

import { TableDataRoutingModule } from './table-data-routing.module';
import { TableDataComponent } from './table-data.component';

import { TestComponent } from '../test/test.component';
import { ShadowTestComponent } from '../shadow-test/shadow-test.component';

@NgModule({
  declarations: [TableDataComponent, TestComponent, ShadowTestComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    AvatarModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    FormsModule,

    TableDataRoutingModule
  ]
})
export class TableDataModule { }
