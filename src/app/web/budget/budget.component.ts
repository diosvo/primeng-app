import { Component, OnInit } from '@angular/core';
import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  money: number = 500000
  budgetItems: BudgetItemModel[] = new Array<BudgetItemModel>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item: BudgetItemModel) {
    this.budgetItems.push(item);
  }
}
