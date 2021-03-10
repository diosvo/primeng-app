import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICustomer } from 'src/app/shared/models/data-table.model';
import { environment } from 'src/environments/environment';
import { ExtractData } from './extract-data';
import { ReuseService } from './reuse.service';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private CUSTOMERS_URL = environment.BASE_URL + 'customers';

  constructor(private http: HttpClient,
              private reuseService: ReuseService) { }

  all(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.CUSTOMERS_URL, ExtractData.httpOptions)
      .pipe(catchError(this.reuseService.handleError));
  }

  find(customerId: number): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.getURLByID(customerId));
  }

  create(customer: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.CUSTOMERS_URL, customer, ExtractData.httpOptions)
      .pipe(catchError(this.reuseService.handleError));
  }

  update(customer: ICustomer): Observable<ICustomer> {
    return this.http.put<ICustomer>(this.getURLByID(customer.id), customer, ExtractData.httpOptions)
      .pipe(catchError(this.reuseService.handleError));
  }

  delete(customer: ICustomer): Observable<ICustomer> {
    return this.http.delete<ICustomer>(this.getURLByID(customer.id), ExtractData.httpOptions)
      .pipe(catchError(this.reuseService.handleError));
  }

  multipleDelete(customers: ICustomer[]): Observable<ICustomer[]> {
    return this.http.post<ICustomer[]>(this.CUSTOMERS_URL, customers, ExtractData.httpOptions)
      .pipe(catchError(this.reuseService.handleError));
  }

  private getURLByID(customerId: number): string {
    return `${this.CUSTOMERS_URL}/${customerId}`;
  }
}
