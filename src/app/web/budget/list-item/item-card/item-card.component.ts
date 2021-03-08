import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {

  @Input() item: BudgetItemModel;
  // should BudgetItemModel -> error: Object is possibly 'undefined' ???

  @Output() xButton: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  onX(item: BudgetItemModel): void {
    this.xButton.emit(item);
  }

  onCardClick(): void {
    this.cardClick.emit();
  }
}
