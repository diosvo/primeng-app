import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

import { UpdateEvent } from './list-item/list-item.component';
import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  providers: [DialogService, MessageService]
})
export class BudgetComponent implements OnInit {
  totalBudget: number = 0;
  budgetItems: BudgetItemModel[] = new Array<BudgetItemModel>();

  constructor(private _messageService: MessageService) { }

  ngOnInit() { }

  async addItem(item: BudgetItemModel) {
    this.budgetItems.push(item);

    this.totalBudget += item.amount;
    this._messageService.add({ severity: 'success', summary: 'Success!', detail: 'Item has already added to the list' });
  }

  async deleteItem(item: BudgetItemModel) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1); // .splice(start, deleteCount)

    this.totalBudget -= item.amount;
    this._messageService.add({ severity: 'success', summary: 'Success!', detail: 'Item has already deleted from the list' });
  }

  async editItem(updateEvent: UpdateEvent) {
    // Replace the item with updated/submitted item from the form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
    this._messageService.add({ severity: 'info', summary: 'Edit Success!', detail: 'Item has already edited from the list' });

    // Update the total budget
    this.totalBudget -= updateEvent.old.amount
    this.totalBudget += updateEvent.new.amount
  }
}