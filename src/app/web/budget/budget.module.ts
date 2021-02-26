import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetComponent } from './budget.component';
import { BudgetRoutingModule } from './budget-routing.module';

import { AddItemModule } from './add-item/add-item.module';
import { ListItemModule } from './list-item/list-item.module';

@NgModule({
  declarations: [BudgetComponent],
  imports: [
    CommonModule,
    BudgetRoutingModule,

    AddItemModule,
    ListItemModule,
  ]
})

export class BudgetModule { }