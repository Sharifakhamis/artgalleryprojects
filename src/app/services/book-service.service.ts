import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private baseURL = "http://localhost:9090/books";
  constructor(private httpClient: HttpClient) { }

  getBookingsList(): Observable<any[]>{
    return this.httpClient.get<any>('${this.baseURL}')
  }
}
