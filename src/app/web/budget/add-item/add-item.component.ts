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
  isNewItem: boolean;

  @Input() item: BudgetItemModel
  @Output() formSubmit: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>()

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.itemForm = this._fb.group({
      amount: ['', Validators.required],
      description: ['', Validators.required]
    })

    this.itemForm.patchValue({
      ...this.item
    })

    // If item has value

    if (this.item) {
      this.isNewItem = true;
    } else {
      this.isNewItem = false;
      this.item = new BudgetItemModel(+'', '')
    }
  }

  onSubmit() {
    this.formSubmit.emit(this.itemForm.value);
    this.itemForm.reset();
  }
}