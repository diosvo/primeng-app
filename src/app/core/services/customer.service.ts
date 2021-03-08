import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Data } from 'src/app/configs/data-table/data';
import { ICountry, ICustomer } from 'src/app/shared/models/data-table.model';
import { environment } from 'src/environments/environment';
import { ReuseService } from './reuse.service';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private CUSTOMERS_URL = environment.BASE_URL + 'customers';

  constructor(private _http: HttpClient, public reuseService: ReuseService) { }

  all() {
    return this._http.get<ICustomer[]>(this.CUSTOMERS_URL)
      .pipe(catchError(this.reuseService.handleError));
  }

  find(customerId: number) {
    return this._http.get<ICustomer[]>(this.getURLByID(customerId));
  }

  create(customer: ICustomer) {
    return this._http.post<ICustomer[]>(this.CUSTOMERS_URL, customer)
      .pipe(catchError(this.reuseService.handleError));
  }

  update(customer: ICustomer) {
    return this._http.put<ICustomer[]>(this.getURLByID(customer.id), customer)
      .pipe(catchError(this.reuseService.handleError));
  }

  delete(customer: ICustomer) {
    return this._http.delete<ICustomer[]>(this.getURLByID(customer.id))
      .pipe(catchError(this.reuseService.handleError));
  }
  
  private getURLByID(customerId: number) {
    return `${this.CUSTOMERS_URL}/${customerId}`;
  }
}
