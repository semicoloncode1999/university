import { Component, computed, effect, signal } from '@angular/core';
import { NumService } from '../service/num.service';

@Component({
  selector: 'app-num',
  templateUrl: './num.component.html',
  styleUrls: ['./num.component.scss']
})
export class NumComponent {

  constructor(private signalServ:NumService){
    effect(()=>{
      if(signalServ.arr().length == 1){
        alert("array now has a last item");
        console.log(signalServ.arr())
      }
    })
  }

  add(){
    this.signalServ.number.update(previous=> previous+1)
  }

  sub(){
    this.signalServ.number.update(previous=> previous-1)
  }

  reset(){
    this.signalServ.number.set(2)
  }

  // -------------------------------------------

  addIntoArray(){
    this.signalServ.arr.mutate(previous=> previous.push({id:3,name:"Ahmedd"}))
  }

  removeFromArray(){
    this.signalServ.arr.mutate(prev => prev.pop())
  }

  
  resetArray(){
    this.signalServ.arr=signal([])
  }

}
