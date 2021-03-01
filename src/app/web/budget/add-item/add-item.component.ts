import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  itemForm!: FormGroup

  @Input() item: BudgetItemModel = new BudgetItemModel(+'', '')
  @Output() formSubmit: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>()

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.itemForm = this._fb.group({
      amount: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  onSubmit() {
    this.formSubmit.emit(this.itemForm.value);
    this.itemForm.reset();
  }
}