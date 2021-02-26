import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';
import { EditItemComponent } from '../../edit-item/edit-item.component';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item : BudgetItemModel;
  // should BudgetItemModel -> error: Object is possibly 'undefined' ???

  @Output() xButton: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>()

  ref: DynamicDialogRef;

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void { }

  onX(item = this.item) {
    this.xButton.emit()
  }

  onEdit() {
    const ref = this.dialogService.open(EditItemComponent, {
      width: '67.5%',
      header: 'Edit Item',
      dismissableMask: true
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
