import { Component } from '@angular/core';
import {OperationService} from "../serve/operation.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  curson=true;
  curson1=true;
  curson2=true;
  curson3=true;
  curson4=true;
  show=false;
  all:any[]=[15,8,9,12,7];
  constructor(private operation:OperationService) {}

  sure(e){
    this.curson=false;
    this.operation.all=this.all[0];
    this.all[0]=this.all[0]-1;
    this.operation.q='B'
  }

  nosure(e){
    this.curson=true;
    this.operation.all=this.all[0]+1;
    this.all[0]=this.all[0]+1;
    this.operation.q='NULL'
  }

    sure1(e){
        this.curson1=false;
        this.operation.all=this.all[1];
        this.all[1]=this.all[1]-1;
        this.operation.q='C'
    }

    nosure1(e){
        this.curson1=true;
        this.operation.all=this.all[1]+1;
        this.all[1]=this.all[1]+1;
        this.operation.q='NULL'
    }

    sure2(e){
        this.curson2=false;
        this.operation.all=this.all[2];
        this.all[2]=this.all[2]-1;
        this.operation.q='D'
    }

    nosure2(e){
        this.curson2=true;
        this.operation.all=this.all[2]+1;
        this.all[2]=this.all[2]+1;
        this.operation.q='NULL'
    }

    sure3(e){
        this.curson3=false;
        this.operation.all=this.all[3];
        this.all[3]=this.all[3]-1;
        this.operation.q='E'
    }

    nosure3(e){
        this.curson3=true;
        this.operation.all=this.all[3]+1;
        this.all[3]=this.all[3]+1;
        this.operation.q='NULL'
    }

    sure4(e){
        this.curson4=false;
        this.operation.all=this.all[4];
        this.all[4]=this.all[4]-1;
        this.operation.q='F'
    }

    nosure4(e){
        this.curson4=true;
        this.operation.all=this.all[4]+1;
        this.all[4]=this.all[4]+1;
        this.operation.q='NULL'
    }

    call(){
      this.show=true;
      alert('预约成功，可在设置里查看详情。')
    }

    nocall(){
      this.show=false;
    }

}
