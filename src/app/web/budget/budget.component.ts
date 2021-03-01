import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';

import { UpdateEvent } from './list-item/list-item.component';
import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  providers: [DialogService, DecimalPipe]
})
export class BudgetComponent implements OnInit {
  totalBudget: number = 0;
  budgetItems: BudgetItemModel[] = new Array<BudgetItemModel>();

  constructor() { }

  async ngOnInit() {
    /* [this.budgetItems, this.totalBudget] = this.items */
  }

  async addItem(item: BudgetItemModel) {
    this.budgetItems.push(item);

    this.totalBudget += item.amount;
    /* await [
      localStorage.setItem('Budget Items', JSON.stringify(this.budgetItems)),
      localStorage.setItem('Total', JSON.stringify(this.totalBudget))
    ] */
  }

  async deleteItem(item: BudgetItemModel) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1); // .splice(start, deleteCount)

    this.totalBudget -= item.amount;
    /* await [
      localStorage.setItem('Budget Items', JSON.stringify(this.budgetItems)),
      localStorage.setItem('Total', JSON.stringify(this.totalBudget))
    ] */
  }

  async editItem(updateEvent: UpdateEvent) {
    // Replace the item with updated/submitted item from the form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

    // Update the total budget
    this.totalBudget -= updateEvent.old.amount
    this.totalBudget += updateEvent.new.amount
  }

  /* get items() {
    let itemDetail = [
      JSON.parse(localStorage.getItem("Budget Items") || '[]'),
      JSON.parse(localStorage.getItem("Total") || '')
    ]
    return itemDetail;
  } */
}
