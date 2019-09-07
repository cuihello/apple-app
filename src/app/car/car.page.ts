import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {OperationService} from "../serve/operation.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {

  constructor(private router:Router,private operation:OperationService) { }
  scar=this.operation.scar;
  scall=this.operation.scall;
  flag=this.scall;
  back(){
    this.router.navigateByUrl('/tabs/tab4')
  }

  ngOnInit() {
  }

}
