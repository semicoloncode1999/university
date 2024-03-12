import { AfterViewInit, Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { GoogleAuthProvider, PhoneAuthCredential, signInWithPhoneNumber, signInWithPopup, RecaptchaVerifier, FacebookAuthProvider } from 'firebase/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { WindowService } from 'src/app/services/window.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../Modules/css/sign-style.css']
})
export class LoginComponent implements AfterViewInit {

  windowRef: any;
  OTPButton: boolean = false;
  emailForm: boolean = false

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private auth: Auth, private windowService: WindowService) {
    auth.languageCode = 'ar';
    this.windowRef = windowService.wondowRef;
  }

  login = this.formBuilder.group({
    email: ["", Validators.required],
    pass: ["", Validators.required],
  })

  signInEmail() {
    if (this.login.valid)
      signInWithEmailAndPassword(this.auth, this.login.value.email!, this.login.value.pass!).then((user) => {
        console.log(user)
        this.toastr.success("تم تسجيل الدخول بنجاح","",{
          "positionClass": "toast-top-right",
        })
      }).catch(() => {
        this.toastr.error("خطاء بتسجيل الدخول","",{
          "positionClass": "toast-top-right",
        })
      })
  }

  google() {
    signInWithPopup(this.auth, new GoogleAuthProvider()).then((user) => {
      console.log(user)
      this.toastr.success("تم تسجيل الدخول بنجاح","",{
        "positionClass": "toast-top-right",
      })
    }).catch(() => {
      this.toastr.error("خطاء بتسجيل الدخول","",{
        "positionClass": "toast-top-right",
      })
    })
  }

  facebook() {
    signInWithPopup(this.auth, new FacebookAuthProvider()).then((user) => {
      console.log(user)
      this.toastr.success("تم تسجيل الدخول بنجاح","",{
        "positionClass": "toast-top-right",
      })
    }).catch(() => {
      this.toastr.error("خطاء بتسجيل الدخول","",{
        "positionClass": "toast-top-right",
      })
    })
  }


  phone(phone: string) {
    signInWithPhoneNumber(this.auth, phone, this.windowRef.RecaptchaVerifier).then((confirmationResult) => {
      this.windowRef.confirmationResult = confirmationResult;
      console.log(confirmationResult);
      this.OTPButton = true
    }).catch((error) => {
      console.log(error)
    });
  }

  sendOTP(otp: string) {
    this.windowRef.confirmationResult.confirm(otp).then(() => {
      this.toastr.success("تم تسجيل الدخول بنجاح","",{
        "positionClass": "toast-top-right",
      })
    }).catch(() => {
      this.toastr.error("خطاء بتسجيل الدخول","",{
        "positionClass": "toast-top-right",
      })
    })
  }

  checkRobot() {
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

}
