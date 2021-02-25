import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';

import { AddItemModule } from './add-item/add-item.module';

@NgModule({
  declarations: [BudgetComponent],
  imports: [
    CommonModule,
    BudgetRoutingModule,

    AddItemModule
  ]
})

export class BudgetModule { }