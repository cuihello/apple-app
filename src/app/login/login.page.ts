import { Component, OnInit } from '@angular/core';
import {LosubService} from "../serve/losub.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private losub: LosubService, private router:Router) { }

  ngOnInit() {
  }

    getuse(adm,psw) {
        this.losub.sub.usename = adm.value;
        this.losub.sub.password = psw.value;
        this.losub.logRes(this.losub.sub).subscribe((data)=>{
            this.losub.sub.usename=data['usename'];
          this.router.navigateByUrl('/tabs/tab1')
        },(reason)=>{
            alert('用户名或密码错误！')
        })
    }

}
