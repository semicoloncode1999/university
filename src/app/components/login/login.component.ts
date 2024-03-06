import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, PhoneAuthCredential, signInWithPhoneNumber, signInWithPopup,RecaptchaVerifier } from 'firebase/auth';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../Modules/css/sign-style.css']
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder, private auth: Auth ) {
    auth.languageCode = 'it';
    
  }

  login = this.formBuilder.group({
    email: ["", Validators.required],
    pass: ["", Validators.required],
  })

  google() {
    signInWithPopup(this.auth, new GoogleAuthProvider()).then(user => {
      console.log(user)
    })
  }



  phone(phone: string) {
  //   signInWithPhoneNumber(this.auth,phone,this.appVerifier).then((confirmationResult) => {
  //     // SMS sent. Prompt user to type the code from the message, then sign the
  //     // user in with confirmationResult.confirm(code).
  //     // window.confirmationResult = confirmationResult;
  //   console.log(confirmationResult)

  //     // ...
  //   }).catch((error) => {
  //     // Error; SMS not sent
  //     // ...
  //   });
  }

}
