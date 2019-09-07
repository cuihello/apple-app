import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BusService} from "../serve/bus.service";

@Component({
  selector: 'app-bus',
  templateUrl: './bus.page.html',
  styleUrls: ['./bus.page.scss'],
})
export class BusPage implements OnInit {

  constructor(private router:Router,private bus:BusService) { }
  img=this.bus.img;
  back(){
    this.router.navigateByUrl('/tabs/tab4')
  }

  ngOnInit() {
  }

}
