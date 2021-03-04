import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

import { TableDataRoutingModule } from './table-data-routing.module';
import { TableDataComponent } from './table-data.component';

@NgModule({
  declarations: [TableDataComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    AvatarModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    TooltipModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    ProgressBarModule,
    ToastModule,
		MultiSelectModule,
    TableDataRoutingModule
  ]
})
export class TableDataModule { }
