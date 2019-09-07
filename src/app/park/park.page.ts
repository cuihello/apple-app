import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {OperationService} from "../serve/operation.service";

@Component({
  selector: 'app-park',
  templateUrl: './park.page.html',
  styleUrls: ['./park.page.scss'],
})
export class ParkPage implements OnInit {
  constructor(private router:Router,private operation:OperationService) { }
  park=this.operation.q;
  count=this.operation.all;
  flag=this.operation.q;
  back(){
    this.router.navigateByUrl('/tabs/tab4')
  }
  pmore(){
    this.router.navigateByUrl('/parkmore')
  }

  ngOnInit() {
  }

}
