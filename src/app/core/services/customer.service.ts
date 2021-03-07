import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Data } from 'src/app/configs/data-table/data';
import { ICountry, ICustomer } from 'src/app/shared/models/data-table.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private BASE_URL = environment.BASE_URL;
  
  constructor(private _http: HttpClient) { }

  getAllCustomers() {
    return this._http.get<ICustomer[]>(this.BASE_URL);
  }

  onGetCountries(): Observable<ICountry[]> {
    const countries = of(Data.Countries || []);
    return countries;
  }
}
