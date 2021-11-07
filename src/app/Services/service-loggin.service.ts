import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceLogginService {


  readonly APIUrl= "http://localhost:3000/";

  constructor(private http:HttpClient) { }

  getDepList(user: any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+`user/login/?user=${user.user}&password=${user.password}`);
  }
}
