import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LosubService {

  constructor(private http:HttpClient) { }
  sub = {
    usename:'',
    password:''
  }

  regsub = {
    usename:'',
    password:'',
    email:''
  }

  register(a){
    return this.http.post('/register',a)
  }
  logRes(s){
    return this.http.post('/login', s)
  }
}
