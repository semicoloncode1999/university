import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ZFooterComponent } from './components/z-footer/z-footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { SlidesComponent } from './components/slides/slides.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NumComponent } from './components/signal-practice/num/num.component';
import { ViewNumComponent } from './components/signal-practice/view-num/view-num.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { ChartsComponent } from './components/charts/charts.component';
// import { NgChartsModule } from 'ng2-charts';
// import { provideCharts, withDefaultRegisterables } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ZFooterComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    SlidesComponent,
    NumComponent,
    ViewNumComponent,
    AdminComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps:[HttpClient]
        }
      }
    ),
    AdminModule,
    // NgChartsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // {provide:provideCharts(withDefaultRegisterables())}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

// export function of transulation load
export function HttpLoaderFactory(http:HttpClient) {
  return new TranslateHttpLoader(http);
}

// provide charts function 
// function provideCharts(arg0: any): any | import("@angular/core").Type<any> {
//   throw new Error('Function not implemented.');
// }

// function withDefaultRegisterables(): any {
//   throw new Error('Function not implemented.');
// }

