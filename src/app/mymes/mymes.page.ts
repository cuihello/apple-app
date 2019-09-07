import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LosubService} from "../serve/losub.service";

@Component({
  selector: 'app-mymes',
  templateUrl: './mymes.page.html',
  styleUrls: ['./mymes.page.scss'],
})
export class MymesPage implements OnInit {

  constructor(private router:Router,private losub:LosubService) { }
  usename=this.losub.sub.usename;
  back(){
    this.router.navigateByUrl('/tabs/tab4')
  }

  ngOnInit() {
  }

}
