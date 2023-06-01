import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICountry } from '../models/ICountry';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private httpClient: HttpClient) {}

  public getAllCountry(): Observable<ICountry[]> {
    let dataUrl: string = `https://restcountries.com/v3.1/all`;
    return this.httpClient
      .get<ICountry[]>(dataUrl)
      .pipe(catchError(this.handleError));
  }
  public getCountriesByRegion(region: string): Observable<ICountry[]> {
    let dataUrl: string = `https://restcountries.com/v3.1/region/${region}`;
    return this.httpClient
      .get<ICountry[]>(dataUrl)
      .pipe(catchError(this.handleError));
  }
  public getCountriesByName(name: string): Observable<ICountry[]> {
    let dataUrl: string = `https://restcountries.com/v3.1/name/${name}`;
    return this.httpClient
      .get<ICountry[]>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
