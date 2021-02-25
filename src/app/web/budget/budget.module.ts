import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [BudgetComponent],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    FormsModule,

    InputTextModule,
    ButtonModule
  ]
})
export class BudgetModule { }
