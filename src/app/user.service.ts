import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './Components/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  

  apiUrl = "http://localhost:3000/users";
 

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  persistUser(data : User):Observable<User>{
    return this.http.post<User>(this.apiUrl ,data);
  }


  getUserByEmail(emailId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}?emailId=${emailId}`);
  }
  
  


  destroyUser(id : string): Observable<Object> {
    return this.http.delete<Object>(`${this.apiUrl}/${id}`);
  }
}
