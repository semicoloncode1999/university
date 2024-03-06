import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { GoogleAuthProvider, PhoneAuthCredential, signInWithPhoneNumber, signInWithPopup,RecaptchaVerifier } from 'firebase/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss', '../../Modules/css/sign-style.css']
})
export class SignUpComponent {

  constructor(private formBuilder: FormBuilder, private auth: Auth ) { }

  signUp = this.formBuilder.group({
    name: ["", Validators.required],
    phone: ["", Validators.required],
    photo: ["", Validators.required],
    email: ["", Validators.required],
    pass: ["", Validators.required],
  })
  
  google(){
    signInWithPopup(this.auth, new GoogleAuthProvider()).then(user => {
      console.log(user)
    })
  }
  
}
