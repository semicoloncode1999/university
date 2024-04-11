import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UniversityDataComponent } from './university-data/university-data.component';


@NgModule({
  declarations: [
    UniversityDataComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    UniversityDataComponent
  ]
})
export class AdminModule { }
