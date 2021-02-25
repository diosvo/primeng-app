import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';

@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    InputTextModule,
    ButtonModule,
  ],
  exports: [ItemComponent]
})

export class ItemModule { }
