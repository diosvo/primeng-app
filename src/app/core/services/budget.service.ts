import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Data } from 'src/app/configs/data-mockup';

import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  onGetAll(): Observable<BudgetItemModel[]> {
    const budget = of(Data.Budget || []);
    return budget;
  }
}
