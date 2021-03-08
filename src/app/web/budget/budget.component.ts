import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';
import { UpdateEvent } from './list-item/list-item.component';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  providers: [DialogService, MessageService]
})
export class BudgetComponent{
  totalBudget = 0;
  budgetItems: BudgetItemModel[] = new Array<BudgetItemModel>();

  constructor(private messageService: MessageService) { }

  async addItem(item: BudgetItemModel): Promise<void> {
    this.budgetItems.push(item);

    this.totalBudget += item.amount;
    this.messageService.add({ severity: 'success', summary: 'Success!', detail: 'Item has already added to the list' });
  }

  async deleteItem(item: BudgetItemModel): Promise<void> {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1); // .splice(start, deleteCount)

    this.totalBudget -= item.amount;
    this.messageService.add({ severity: 'success', summary: 'Success!', detail: 'Item has already deleted from the list' });
  }

  async editItem(updateEvent: UpdateEvent): Promise<void> {
    // Replace the item with updated/submitted item from the form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
    this.messageService.add({ severity: 'info', summary: 'Edit Success!', detail: 'Item has already edited from the list' });

    // Update the total budget
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }
}