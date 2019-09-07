import { Component } from '@angular/core';
import {BusService} from "../serve/bus.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private bus: BusService) {}
    img = '';
    show=true;
    addrs: any[] = [
        '东风广场',
        '东部汽车客运站',
        '北部汽车客运站',
        '南部汽车客运站',
        '西部汽车客运站',
        '昆明火车站',
        '云南大学呈贡校区'
    ];

    times: any[] = ['6点', '7点', '8点', '9点', '10点', '11点', '12点'
    , '13点', '14点', '15点', '16点', '17点', '18点', '19点', '20点', '21点'];

    getsvalue($event) {
        console.log($event.detail.value);
        this.bus.s.address=$event.detail.value;
    }

    gettime(a) {
        console.log(a.detail.value);
        this.bus.s.time=a.detail.value;
    }

    getbus(){
        this.show=false;
        this.bus.subselect(this.bus.s).subscribe(data=>{
            console.log(data);
            this.bus.img=data['img'];
            this.img=this.bus.img;
        },reason=>{console.log(reason)})
    }


    cancelbus() {
        this.show=true;
        this.img='';
        this.bus.img='';
    }
}
