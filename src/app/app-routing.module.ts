import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { SlidesComponent } from './components/slides/slides.component';

const routes: Routes = [
  {path:"" ,component:HomeComponent},
  {path:"slides/:id" ,component:SlidesComponent},
  {path:"login" ,component:LoginComponent},
  {path:"sign-up" ,component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
