import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { MainGestionComponent } from './Gestion/main-gestion/main-gestion.component';
import { AccountingComponent } from './accounting/accounting.component';

const roads = [
  { path : 'auth/signin', component: SignInComponent },
  { path : 'auth/signup',  component: SignUpComponent },
  { path : '',  component: HomeComponent },
  { path : 'gestion/mainPage',  component: MainGestionComponent },
  { path : 'accounting',  component: AccountingComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    MainGestionComponent,
    AccountingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(roads)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
