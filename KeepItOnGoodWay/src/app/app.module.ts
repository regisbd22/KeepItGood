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
import { BudgetComponent } from './Gestion/budget/budget.component';
import { ChargeServiceService } from './service/charge-service.service';
import { MainChargeComponent } from './Gestion/budget/Charge/main-charge/main-charge.component';
import { MainProduitComponent } from './Gestion/budget/Produit/main-produit/main-produit.component';
import { CrudProductComponent } from './Gestion/budget/Produit/crud-product/crud-product.component';
import { CrudChargeComponent } from './Gestion/budget/Charge/crud-charge/crud-charge.component';
import { ReactiveFormsModule } from '@angular/forms';

const roads = [
  { path : 'auth/signin', component: SignInComponent },
  { path : 'auth/signup',  component: SignUpComponent },
  { path : 'home',  component: HomeComponent },
  { path : 'gestion',  component: MainGestionComponent },
  { path : 'gestion/budget',  component: BudgetComponent },
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
    HeaderComponent,
    BudgetComponent,
    MainChargeComponent,
    MainProduitComponent,
    CrudProductComponent,
    CrudChargeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(roads),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatCardModule, MatToolbarModule, MatIconModule
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule
  ],
  providers: [
    ChargeServiceService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
