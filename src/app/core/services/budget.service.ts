import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  onGetAll(): Observable<BudgetItemModel[]> {
    const budget = of(JSON.parse(localStorage.getItem("Budget Items") || '[]'));
    return budget;
  }
}
