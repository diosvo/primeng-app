import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { AddItemRoutingModule } from './add-item-routing.module';
import { AddItemComponent } from './add-item.component';

@NgModule({
  declarations: [AddItemComponent],
  imports: [
    CommonModule,
    AddItemRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    InputTextModule,
    ButtonModule,
  ],
  exports: [AddItemComponent]
})

export class AddItemModule { }
