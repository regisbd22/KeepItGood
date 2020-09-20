import { Injectable } from '@angular/core';
import { Charge } from '../model/charge';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChargeServiceService {

  chargeList: Charge[] = [];
  chargeSubject = new Subject<Charge[]>();

  constructor() { }

  emitChargeSubject() {
    this.chargeSubject.next(this.chargeList.slice());
  }

  addCharge(charge: Charge) {
    charge.id = this.chargeList.length + 1; // change if BDD is in charge
    this.chargeList.push(charge);
    this.emitChargeSubject();
  }

  editCharge(chargeValueForm: Charge, id: number) {
    const index = this.chargeList.findIndex(c => c.id === id);
    this.chargeList[index] = chargeValueForm;
    this.chargeList[index].date = new Date();
    this.emitChargeSubject();
  }

  removeCharge(id: number) {
    const charge = this.chargeList.findIndex(x => x.id === id);
    this.chargeList.splice(charge, 1);
    this.emitChargeSubject();
  }

  getAllCharge() {
    return this.chargeList;
  }
}
