import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rapport } from './Rapport';
import { Initr } from './Initr';

@Injectable({
  providedIn: 'root'
})
export class RapportService {
  private apiUrl = 'http://localhost:3000/rapports'; // Your JSON server URL
  private apiUrl1 = 'http://localhost:3000/initrs'; // Your JSON server URL


  constructor(private http: HttpClient) {}


  getRapports(): Observable<Rapport[]> {
    return this.http.get<Rapport[]>(this.apiUrl);
  }

  getRapport(id : string): Observable<Rapport> {
    return this.http.get<Rapport>(`${this.apiUrl}/${id}`);
  }

  addRapport(rapport: Rapport): Observable<Rapport> {
    return this.http.post<Rapport>(this.apiUrl, rapport);
  }

  deleteRapport(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  

  
  getInitrs(): Observable<Initr[]> {
    return this.http.get<Initr[]>(this.apiUrl1);
  }

  getInitr(id : string): Observable<Initr> {
    return this.http.get<Initr>(`${this.apiUrl1}/${id}`);
  }

  addInitr(r: Initr): Observable<Initr> {
    return this.http.post<Initr>(this.apiUrl1, r);
  } 
}
