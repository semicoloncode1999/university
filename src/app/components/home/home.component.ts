import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../Modules/css/sign-style.css']
})
export class HomeComponent {

  constructor(private toastr: ToastrService, private route:Router) { }

  university: string = ""

  faculty: string = ""

  year: string = ""

  theChoice() {
    if (this.university === "") {
      this.toastr.error("اختر الجامعة")
    } else if (this.faculty === "") {
      this.toastr.error("اختر الكلية")
    } else if (this.year === "") {
      this.toastr.error("اختر السنة الدراسية")
    }else{
      this.route.navigate([`slides/${this.university}-${this.faculty}-${this.year}`])
    }
  }

}
