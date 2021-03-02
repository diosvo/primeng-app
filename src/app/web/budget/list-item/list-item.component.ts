import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html'
})

export class ListItemComponent implements OnInit {

  ref: DynamicDialogRef;

  @Input() budgetItems: BudgetItemModel[]

  // should: BudgetItemModel[] -> error: Object is possibly 'undefined'

  @Output() deleteItem: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>()
  @Output() editItem: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>()

  constructor(public dialogService: DialogService) { }

  async ngOnInit() {}

  onDelete(item: BudgetItemModel) {
    this.deleteItem.emit(item)
  }

  onEdit(item: BudgetItemModel) {
    const ref = this.dialogService.open(EditItemComponent, {
      width: '700px',
      header: 'Edit Item',
      data: item,
      dismissableMask: true
    });

    ref.onClose.subscribe((result: BudgetItemModel) => {
      if (result) {
        this.editItem.emit({
          old: item,
          new: result
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}

export interface UpdateEvent {
  old: BudgetItemModel,
  new: BudgetItemModel
}