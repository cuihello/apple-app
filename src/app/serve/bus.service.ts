import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http:HttpClient) { }
  s={address:'',
    time:''};
  img='';
  subselect(s){
    return this.http.post('/getcode',s);
  }

}
