import { Component } from '@angular/core';
import {INT_TYPE} from "@angular/compiler/src/output/output_ast";
import {OperationService} from "../serve/operation.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    curson1=true;
    curson2=true;
    curson3=true;
    show=false;
    my1=0;
    my2=0;
    my3=0;
    constructor(private operation:OperationService) {}

    sure1(e){
        this.curson1=false;
        this.my1=Math.floor((Math.random()*100));
        this.operation.scar='A1'
        this.operation.scall=this.my1;
    }

    nosure1(e){
        this.curson1=true;
        this.my1=0;
        this.operation.scar='NULL'
        this.operation.scall=this.my1;
    }

    sure2(e){
        this.curson2=false;
        this.my2=Math.floor((Math.random()*100));
        this.operation.scar='A2'
        this.operation.scall=this.my2;
    }

    nosure2(e){
        this.curson2=true;
        this.my2=0;
        this.operation.scar='NULL'
        this.operation.scall=this.my2;
    }

    sure3(e){
        this.curson3=false;
        this.my3=Math.floor((Math.random()*100));
        this.operation.scar='A3'
        this.operation.scall=this.my3;
    }

    nosure3(e){
        this.curson3=true;
        this.my2=0;
        this.operation.scar='NULL';
        this.operation.scall=this.my3;
    }

    call(){
        this.show=true;
    }

    nocall(){
        this.show=false;
    }

}
