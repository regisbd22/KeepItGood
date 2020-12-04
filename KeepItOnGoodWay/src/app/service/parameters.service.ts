import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { AccountingAccount } from '../model/AccountingAccount';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  accountsList: AccountingAccount[] = [];
  accountsSubject = new Subject<AccountingAccount[]>();

  constructor() { }

  emitAccountsSubject() {
    this.accountsSubject.next(this.accountsList.slice());
  }

  addAccount(account: AccountingAccount) {
    account.id = this.accountsList.length + 1; // change if BDD is in charge
    this.accountsList.push(account);
    this.emitAccountsSubject();
  }

  editCharge(accountValueForm: AccountingAccount, id: number) {
    const index = this.accountsList.findIndex(c => c.id === id);
    this.accountsList[index] = accountValueForm;
    this.emitAccountsSubject();
  }

  removeAccount(id: number) {
    const index = this.accountsList.findIndex(x => x.id === id);
    if (index) {
      this.accountsList.splice(index, 1);
    }
    this.emitAccountsSubject();
  }

  getAllAccounts() {
    return this.accountsList;
  }
}
