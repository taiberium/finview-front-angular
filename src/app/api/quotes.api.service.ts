import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {Quote} from "../model/quote.model";
import {SearchQuote} from "../model/searchQuote.model";


@Injectable()
export class QuotesApiService {

  constructor(private apiService: ApiService) {
  }

  getQuotes(tickers: string[]): Observable<{ articles: Quote[] }> {
    const requestParams: HttpParams = new HttpParams({fromObject: {quote: tickers}});
    return this.apiService.get("/quotes", requestParams);
  }

  searchQuotes(ticker: string): Observable<{ articles: SearchQuote[] }> {
    return this.apiService.get(`/search/${ticker}`);
  }
}
