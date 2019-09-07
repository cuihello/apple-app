import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-seting',
  templateUrl: './seting.page.html',
  styleUrls: ['./seting.page.scss'],
})
export class SetingPage implements OnInit {

  constructor(private router:Router) { }
  back(){
    this.router.navigateByUrl('/tabs/tab4')
  }

  ngOnInit() {
  }

    exist() {
        this.router.navigateByUrl('/login')
    }
}
