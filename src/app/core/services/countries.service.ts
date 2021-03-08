import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICountry } from 'src/app/shared/models/data-table.model';
import { environment } from 'src/environments/environment';
import { ReuseService } from './reuse.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private COUNTRIES_URL = environment.BASE_URL + 'countries';

  constructor(private _http: HttpClient, public reuseService: ReuseService) { }

  all(): Observable<ICountry[]> {
    return this._http.get<ICountry[]>(this.COUNTRIES_URL)
      .pipe(catchError(this.reuseService.handleError));
  }
}
