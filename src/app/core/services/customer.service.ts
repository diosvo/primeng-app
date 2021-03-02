import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Data } from 'src/app/configs/data-table/data';
import { ICustomer } from 'src/app/shared/models/data-table.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  onGetAllCustomer(): Observable<ICustomer[]> {
    const customer = of(Data.Customer || []);
    return customer;
  }
}
