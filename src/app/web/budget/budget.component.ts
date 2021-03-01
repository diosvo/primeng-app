import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  providers: [DialogService]
})
export class BudgetComponent implements OnInit {
  money: number = 500000

  budgetItems: BudgetItemModel[] = new Array<BudgetItemModel>();

  constructor() { }

  async ngOnInit() {
    this.budgetItems = this.items
  }

  async addItem(item: BudgetItemModel) {
    this.budgetItems.push(item);
    await localStorage.setItem('BudgetItems', JSON.stringify(this.budgetItems));
  }

  async deleteItem(item: BudgetItemModel) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1); // .splice(start, deleteCount)

    await localStorage.setItem('BudgetItems', JSON.stringify(this.budgetItems));
  }

  get items() {
    return JSON.parse(localStorage.getItem("BudgetItems") || '[]')
  }
}
