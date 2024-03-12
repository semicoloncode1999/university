import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { GoogleAuthProvider, PhoneAuthCredential, signInWithPhoneNumber, signInWithPopup,RecaptchaVerifier, FacebookAuthProvider } from 'firebase/auth';
import { WindowService } from 'src/app/services/window.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss', '../../Modules/css/sign-style.css']
})
export class SignUpComponent {

  constructor(private formBuilder: FormBuilder, private auth: Auth , private windowService: WindowService) { 
    auth.languageCode = 'ar';
    this.windowRef = windowService.wondowRef;
  }

  windowRef: any;
  OTPButton: boolean = false;
  emailForm:boolean = false

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

  facebook() {
    signInWithPopup(this.auth, new FacebookAuthProvider()).then(user => {
      console.log(user)
    })
  }

  phone(phone: string) {
    signInWithPhoneNumber(this.auth, phone, this.windowRef.RecaptchaVerifier).then((confirmationResult) => {
      this.windowRef.confirmationResult = confirmationResult;
      console.log(confirmationResult);
      this.OTPButton=true
    }).catch((error) => {
      console.log(error)
    });
  }

  sendOTP(otp: string) {
    this.windowRef.confirmationResult.confirm(otp).then(() => {
      console.log("login successfully")
    }).catch(() => {
      console.log("login error")
    })
  }

  ngAfterViewInit(): void {
    // this.windowRef.RecaptchaVerifier = new RecaptchaVerifier('receptcha-container', {
    //   size: "normal",
    //   callback: () => {
    //     // this.OTPButton=true
    //   }
    // },
    //   this.auth
    // );
    // this.windowRef.RecaptchaVerifier.render()
  }

  checkRobot(){
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
