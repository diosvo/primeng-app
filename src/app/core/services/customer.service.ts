import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Data } from 'src/app/configs/data-table/data';
import { ICountry, ICustomer } from 'src/app/shared/models/data-table.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private CUSTOMERS_URL = environment.BASE_URL + 'customers';

  constructor(private _http: HttpClient) { }

  all() {
    return this._http.get<ICustomer[]>(this.CUSTOMERS_URL)
      .pipe(catchError(this.handleError));
  }

  find(customerId: number) {
    return this._http.get<ICustomer[]>(this.getURLByID(customerId));
  }

  create(customer: ICustomer) {
    return this._http.post<ICustomer[]>(this.CUSTOMERS_URL, customer)
      .pipe(catchError(this.handleError));
  }

  update(customer: ICustomer) {
    return this._http.put<ICustomer[]>(this.getURLByID(customer.id), customer)
      .pipe(catchError(this.handleError));
  }

  delete(customer: ICustomer) {
    return this._http.delete<ICustomer[]>(this.getURLByID(customer.id))
      .pipe(catchError(this.handleError));
  }

  onGetCountries(): Observable<ICountry[]> {
    const countries = of(Data.Countries || []);
    return countries;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  private getURLByID(customerId: number) {
    return `${this.CUSTOMERS_URL}/${customerId}`;
  }
}
