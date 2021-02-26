import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

import { EditItemComponent } from './edit-item.component';
import { AddItemModule } from '../add-item/add-item.module';

@NgModule({
  declarations: [EditItemComponent],
  imports: [
    CommonModule,
    ButtonModule,

    AddItemModule
  ],
  exports: [EditItemComponent]
})

export class EditItemModule { }