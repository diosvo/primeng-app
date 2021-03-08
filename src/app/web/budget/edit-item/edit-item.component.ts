import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  @Input() item: BudgetItemModel;

  constructor(public ref: DynamicDialogRef,
              public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.item = this.config.data;
  }

  onSubmit(updateItem: BudgetItemModel): void {
    this.ref.close(updateItem);
  }
}
