import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item : BudgetItemModel;
  // should BudgetItemModel -> error: Object is possibly 'undefined' ???

  @Output() xButton: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>()

  constructor() { }

  ngOnInit(): void {}

  onX() {
    this.xButton.emit()
  }

}
