import { Component, OnInit } from '@angular/core';
import {MoreService} from "../serve/more.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-moremes',
  templateUrl: './moremes.page.html',
  styleUrls: ['./moremes.page.scss'],
})
export class MoremesPage implements OnInit {

  constructor(private moreMessage:MoreService, private router:Router) { }
  mes=this.moreMessage.suremessage;

  back(){
    this.router.navigateByUrl('/sysmes')
  }
  ngOnInit() {
  }

}
