import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChargeServiceService } from 'src/app/service/charge-service.service';
import { MatDialog } from '@angular/material';
import { Charge } from 'src/app/model/charge';
import { Subscription } from 'rxjs';
import { CrudChargeComponent } from '../crud-charge/crud-charge.component';

@Component({
  selector: 'app-main-charge',
  templateUrl: './main-charge.component.html',
  styleUrls: ['./main-charge.component.scss']
})
export class MainChargeComponent implements OnInit, OnDestroy {

  isPopUpOpened = false;
  chargeList: Charge[];
  chargeSubscription: Subscription;

  constructor(private chargeService?: ChargeServiceService, private dialog?: MatDialog) { }

  ngOnInit() {
    this.chargeSubscription = this.chargeService.chargeSubject.subscribe(
      (charges: any[]) => {
        this.chargeList = charges;
      }
    );
    this.chargeService.emitChargeSubject();
  }

  ngOnDestroy() {
    this.chargeSubscription.unsubscribe();
  }

  addCharge() {
    this.isPopUpOpened = true;
    const dialogRef = this.dialog.open(CrudChargeComponent, {
      data: []
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopUpOpened = false;
    });
  }

  editChargeAccount(id: number) {
    this.isPopUpOpened = true;
    const charge = this.chargeService.getAllCharge().find(c => c.id === id);
    const dialogRef = this.dialog.open(CrudChargeComponent, {
      data: charge
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopUpOpened = false;
    });
  }

  removeChargeAccount(id: number) {
    this.chargeService.removeCharge(id);
  }

}
