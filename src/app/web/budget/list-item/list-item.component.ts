import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html'
})

export class ListItemComponent implements OnInit {

  @Input() budgetItems: BudgetItemModel[]

  // should: BudgetItemModel[] -> error: Object is possibly 'undefined'

  @Output() deleteItem: EventEmitter<BudgetItemModel> =  new EventEmitter<BudgetItemModel>()

  constructor() { }

  ngOnInit(): void {}

  onDelete(item: BudgetItemModel) {
    this.deleteItem.emit()
  }
}