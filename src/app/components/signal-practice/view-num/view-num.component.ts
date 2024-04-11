import { Component, computed, effect } from '@angular/core';
import { NumService } from '../service/num.service';

@Component({
  selector: 'app-view-num',
  templateUrl: './view-num.component.html',
  styleUrls: ['./view-num.component.scss']
})
export class ViewNumComponent {

  x = this.numberServ.number;

  arr=this.numberServ.arr;
  
  constructor(private numberServ:NumService){
    effect(()=>{
      if(numberServ.number() < -2){
        alert("number is less than -2");
      }
      console.log(numberServ.number())
    })
  }

  // computed didn't work
  // mycount=computed(()=>{ this.numberServ.arr().length});


}
