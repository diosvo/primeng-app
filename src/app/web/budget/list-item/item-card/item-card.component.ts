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

  @Input() item: BudgetItemModel;
  // should BudgetItemModel -> error: Object is possibly 'undefined' ???

  @Output() xButton: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>()
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {}

  onX(item: BudgetItemModel) {
    this.xButton.emit(item)
  }

  onCardClick() {
    this.cardClick.emit()
  }
}
