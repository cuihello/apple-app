import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-parkmore',
  templateUrl: './parkmore.page.html',
  styleUrls: ['./parkmore.page.scss'],
})
export class ParkmorePage implements OnInit {

  constructor(private router:Router) { }
  back(){
    this.router.navigateByUrl('/park')
  }

  ngOnInit() {
  }

}
