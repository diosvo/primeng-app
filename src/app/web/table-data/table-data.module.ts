import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
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
    MenuModule,
    ConfirmDialogModule,
    ToolbarModule,

    SharedDirectivesModule,
    TableDataRoutingModule,
  ]
})
export class TableDataModule { }
