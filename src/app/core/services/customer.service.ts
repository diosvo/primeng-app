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
  CUSTOMERS_URL = environment.BASE_URL + 'customers';

  constructor(private _http: HttpClient) { }

  getAllCustomers() {
    return this._http.get<ICustomer[]>(this.CUSTOMERS_URL)
      .pipe(catchError(this.handleError));
  }

  createNewCustomer(customer: ICustomer) {
    return this._http.post<ICustomer[]>(this.CUSTOMERS_URL, customer)
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
}
