import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from 'src/app/home/home.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginFailComponent } from './login-fail/login-fail.component';
import { LoginComponent } from './login/login.component';
import { MovieEntryComponent } from './movie-entry/movie-entry.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

const routes: Routes = [
  {
    path : '',
    component:LoginComponent
  },
  {
    path : 'home',
    component:HomeComponent
  },
  {
    path : 'error',
    component:LoginFailComponent
  },
  {
    path : 'movie-entry',
    component:MovieEntryComponent
  },
  {
    path: 'movie-info',
    component:MovieInfoComponent
  },
  {
    path: 'contactus',
    component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
