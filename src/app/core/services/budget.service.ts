import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Data } from 'src/app/configs/data-mockup';

import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private URL = environment.BASE_URL + 'posts';
  constructor(private http: HttpClient) { }

  onGetAll(): Observable<BudgetItemModel[]> {
    const budget = of(Data.Budget || []);
    return budget;
  }

  get(params: any): Observable<any> {
    return this.http.get(`${this.URL}/?f_location=${params}`).pipe(map(() => console.log('OK!')));
  }
}
