import { Component, OnInit } from '@angular/core';
import {LosubService} from "../serve/losub.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private losub:LosubService, private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl('/login')
  }

    regis(a,b,c,d) {
    if(c.value!=d.value){
      alert('两次输入的密码不一致');
    }
    else {
      this.losub.regsub.usename=a.value;
      this.losub.regsub.password=c.value;
      this.losub.regsub.email=b.value;
      this.losub.register(this.losub.regsub).subscribe((data)=>{
          if(data['rea']=='success'){
            alert('注册成功点击确定可直接登录！');
            this.router.navigateByUrl('/tabs/tab1');
        }
        else{
            alert('该用户名已存在！');
            console.log(data['rea'])
            this.router.navigateByUrl('/register');
        }
      },(reason)=>{
        alert('注册失败')
          console.log(reason,reason['rea'])
        this.router.navigateByUrl('/register')
      })
    }

    }
}
