import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MoreService} from "../serve/more.service";

@Component({
  selector: 'app-sysmes',
  templateUrl: './sysmes.page.html',
  styleUrls: ['./sysmes.page.scss'],
})
export class SysmesPage implements OnInit {

  constructor(private router:Router, private more:MoreService) { }
  messages=[{content:"你成功注册了机场预约系统的账号，请妥善保管好自己的账号和密码，工作人员不会询问你的个人隐私信息，不要随便相信任何相关的链接"},
      {content:"系统通知：由于受天气影响，通往大学城的大巴将推迟发车，具体的发车时间视天气情况而定，为你带来了不便，我们表示非常抱歉"},
      {content:"系统通知：你已成功预约了从机场到大学城的大巴，请注意发车时间，按时到指定地点上车"}]

  showmore(message){
   this.more.suremessage=message.content;
   this.router.navigateByUrl('/moremes')
  }

  back(){
      this.router.navigateByUrl('/tabs/tab4')
  }
  ngOnInit() {
  }

}
