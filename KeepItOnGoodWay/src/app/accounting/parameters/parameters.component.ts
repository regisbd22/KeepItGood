import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { CrudParametersComponent } from './crud-parameters/crud-parameters.component';
import { ParametersService } from 'src/app/service/parameters.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  isPopUpOpened = false;
  chargeAccounts: any[];
  parametersSubscription: Subscription;
  
  constructor(private parametersService?: ParametersService, private dialog?: MatDialog) { } 

  ngOnInit() {
    // this.parametersSubscription = this.parametersService.chargeAccountsSubject.subscribe(
    //   (charges: any[]) => {
    //     this.chargeAccounts = charges;
    //   }
    // );
    // this.parametersService.emitChargeAccountsSubject();
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


  editChargeAccount(id: number) {
    this.isPopUpOpened = true;
    // const chargeAccount = this.parameterService.getAllChargeAccounts().find(c => c.id === id);
    // const dialogRef = this.dialog.open(CrudParametersComponent, {
    //   data: chargeAccount
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   this.isPopUpOpened = false;
    // });
  }

  removeChargeAccount(id: number) {
    //this.parameterService.removeCharge(id);
  }
}
