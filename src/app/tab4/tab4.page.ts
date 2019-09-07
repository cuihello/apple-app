import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {OperationService} from "../serve/operation.service";
import {LosubService} from "../serve/losub.service";

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  ope='';
  usename=this.losub.sub.usename;
  constructor(private router:Router,private losub:LosubService) {
  }

  ngOnInit() {
  }

    moremes() {
        this.router.navigateByUrl('/mymes');
    }

    sysmes() {
        this.router.navigateByUrl('/sysmes')
    }

    bus(){
    this.router.navigateByUrl('/bus')
    }

    car(){
    this.router.navigateByUrl('/car')
    }

    park(){
    this.router.navigateByUrl('park')
    }

    seting(){
    this.router.navigateByUrl('/seting')
    }

}
