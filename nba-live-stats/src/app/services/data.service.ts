import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  readonly baseUrl:string = "http://127.0.0.1:8003"

  getTodaysGames(): Observable<any>{
   return this.http.get<any>(`${this.baseUrl}/todays-games`);
  }
}
