import { AfterViewInit, Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, PhoneAuthCredential, signInWithPhoneNumber, signInWithPopup, RecaptchaVerifier } from 'firebase/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { WindowService } from 'src/app/services/window.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../Modules/css/sign-style.css']
})
export class LoginComponent implements AfterViewInit {

  windowRef: any;
  OTPButton:boolean=false;

  constructor(private formBuilder: FormBuilder, private auth: Auth, private windowService: WindowService) {
    auth.languageCode = 'it';
    this.windowRef = windowService.wondowRef;
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
    signInWithPhoneNumber(this.auth, phone, this.windowRef.RecaptchaVerifier ).then((confirmationResult) => {
      this.windowRef.confirmationResult = confirmationResult;
      console.log(confirmationResult)
    }).catch((error) => {
      console.log(error)
    });
  }

  sendOTP(otp:string){
    this.windowRef.confirmationResult.confirm(otp).then(()=>{
      console.log("login successfully")
    }).catch(()=>{
      console.log("login error")
    })
  }

  ngAfterViewInit(): void {
    this.windowRef.RecaptchaVerifier = new RecaptchaVerifier('receptcha-container', {
      size: "normal",
      callback: () => {
        // this.OTPButton=true
      }
    },
      this.auth
    );
    this.windowRef.RecaptchaVerifier.render()
  }


}
