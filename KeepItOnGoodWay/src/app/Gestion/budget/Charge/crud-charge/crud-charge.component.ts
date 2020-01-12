import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MainChargeComponent } from '../main-charge/main-charge.component';
import { ChargeServiceService } from 'src/app/service/charge-service.service';
import { Charge } from 'src/app/model/charge';

@Component({
  selector: 'app-crud-charge',
  templateUrl: './crud-charge.component.html',
  styleUrls: ['./crud-charge.component.scss']
})
export class CrudChargeComponent implements OnInit {

  public chargeForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private matDialogRef: MatDialogRef<MainChargeComponent>,
    private chargeService: ChargeServiceService,
    @Inject(MAT_DIALOG_DATA)public data: any) { }

  ngOnInit() {
    this.chargeForm = this.formBuilder.group({
      name: [this.data.name, Validators.required],
      amountCharge: [this.data.amountCharge, Validators.required]
    });
  }

  onNoClick() {
    this.matDialogRef.close();
  }

  onSubmitForm() {
    if (isNaN(this.data.id)) {
      const formValue = this.chargeForm.value;
      const charge = new Charge();
      charge.name = formValue.name;
      charge.amount = formValue.amountCharge;
      this.chargeService.addCharge(charge);
      this.matDialogRef.close();
    } else {
      this.chargeService.editCharge(this.chargeForm.value);
      this.matDialogRef.close();
    }
  }

}
