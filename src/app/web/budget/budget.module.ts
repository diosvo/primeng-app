import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';


import { ItemModule } from './item/item.module';

@NgModule({
  declarations: [BudgetComponent],
  imports: [
    CommonModule,
    BudgetRoutingModule,

    ItemModule
  ]
})

export class BudgetModule { }