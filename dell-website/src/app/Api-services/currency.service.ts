import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyResponse } from './currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient:HttpClient) { }

  getCurrency() : Observable<CurrencyResponse[]>{
    return this.httpClient.get<CurrencyResponse[]>("https://api.nbp.pl/api/exchangerates/tables/A/?format=json");
  }
}
