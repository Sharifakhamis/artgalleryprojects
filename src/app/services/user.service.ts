import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
// import { Users } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private usersUrl: string = 'http://localhost:9090/adduser()';
  private url: string = 'http://localhost:9090/adduser()';
 
 

  constructor(private httpClient: HttpClient) {
    // it work properly
    this.usersUrl = 'http://localhost:9090/getusers'
    this.url = 'http://localhost:9090/adduser'
    
  }

  public getAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.usersUrl);
  }

  public addUsers(data: any) {  
    return this.httpClient.post(this.url,data);
  }  
  
  // deleteStudent(id: number): Observable<any> {  
  //   return this.http.delete(`${this.baseUrl}/delete-student/${id}`, { responseType: 'text' });  
  // }  
  
  // getStudent(id: number): Observable<Object> {  
  //   return this.http.get(`${this.baseUrl}/student/${id}`);  
  // }  
  
  // updateStudent(id: number, value: any): Observable<Object> {  
  //   return this.http.post(`${this.baseUrl}/update-student/${id}`, value);  
  // }  


}