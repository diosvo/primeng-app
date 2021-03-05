import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Data } from 'src/app/configs/data-table/data';
import { ICountry, ICustomer } from 'src/app/shared/models/data-table.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  onGetAllCustomers(): Observable<ICustomer[]> {
    const customers = of(Data.Customers || []);
    return customers;
  }

  onGetCountries(): Observable<ICountry[]> {
    const countries = of(Data.Countries || []);
    return countries;
  }
}
