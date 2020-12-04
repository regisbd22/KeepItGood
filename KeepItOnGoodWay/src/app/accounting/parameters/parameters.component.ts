import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { CrudParametersComponent } from './crud-parameters/crud-parameters.component';
import { ParametersService } from 'src/app/service/parameters.service';
import { AccountingAccount } from 'src/app/model/AccountingAccount';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  isPopUpOpened = false;
  accounts: AccountingAccount[];
  chargeAccounts: AccountingAccount[];
  parametersSubscription: Subscription;
  
  constructor(private parametersService?: ParametersService, private dialog?: MatDialog) { } 

  ngOnInit() {
    this.parametersSubscription = this.parametersService.accountsSubject.subscribe(
      (accounts: any[]) => {
        this.accounts = accounts;
      }
    );
    this.parametersService.emitAccountsSubject();
    this.manageChargeAccountSubscription();
  }

  ngOnDestroy() {
    this.parametersSubscription.unsubscribe();
  }

  addAccount() {
    this.isPopUpOpened = true;
    const dialogRef = this.dialog.open(CrudParametersComponent, {
      data: []
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopUpOpened = false;
    });
  }

  editAccount(id: number) {
    this.isPopUpOpened = true;
    const account = this.parametersService.getAllAccounts().find(c => c.id === id);
    const dialogRef = this.dialog.open(CrudParametersComponent, {
      data: account
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopUpOpened = false;
    });
  }

  removeAccount(id: number) {
    this.parametersService.removeAccount(id);
  }

  getTypeAccount(numberAccount: number): string {
    return numberAccount.toString().substring(1);
  }

  // ****** Private methods ***** //
  private manageChargeAccountSubscription(): void {
    //todo
  }
}
