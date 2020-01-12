import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { MainGestionComponent } from './Gestion/main-gestion/main-gestion.component';
import { AccountingComponent } from './accounting/accounting.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatTabsModule, 
  MatSidenavModule
} from '@angular/material';

const roads = [
  { path : 'auth/signin', component: SignInComponent },
  { path : 'auth/signup',  component: SignUpComponent },
  { path : 'home',  component: HomeComponent },
  { path : 'gestion/mainPage',  component: MainGestionComponent },
  { path : 'accounting',  component: AccountingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    MainGestionComponent,
    AccountingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(roads),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatCardModule, MatToolbarModule, MatIconModule
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
