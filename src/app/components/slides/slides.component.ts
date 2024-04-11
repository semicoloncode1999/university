import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent {

  dataInLink:any;
  constructor(private activatedRoutes:ActivatedRoute){
    activatedRoutes.params.subscribe(data=>{
      this.dataInLink=data;
      console.log(this.dataInLink.id.toString().split("-"))
    })
  }

}
