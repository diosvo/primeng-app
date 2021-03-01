import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  providers: [DialogService, DecimalPipe]
})
export class BudgetComponent implements OnInit {
  budgetTotal: number = 0;
  budgetItems: BudgetItemModel[] = new Array<BudgetItemModel>();

  constructor() { }

  async ngOnInit() {
    /* [this.budgetItems, this.budgetTotal] = this.items */
  }

  async addItem(item: BudgetItemModel) {
    this.budgetItems.push(item);

    this.budgetTotal += item.amount;
    /* await [
      localStorage.setItem('Budget Items', JSON.stringify(this.budgetItems)),
      localStorage.setItem('Total', JSON.stringify(this.budgetTotal))
    ] */
  }

  async deleteItem(item: BudgetItemModel) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1); // .splice(start, deleteCount)

    this.budgetTotal -= item.amount;
    /* await [
      localStorage.setItem('Budget Items', JSON.stringify(this.budgetItems)),
      localStorage.setItem('Total', JSON.stringify(this.budgetTotal))
    ] */
  }

  /* get items() {
    let itemDetail = [
      JSON.parse(localStorage.getItem("Budget Items") || '[]'),
      JSON.parse(localStorage.getItem("Total") || '')
    ]
    return itemDetail;
  } */
}
