import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ParametersComponent } from '../parameters.component';
import { ParametersService } from 'src/app/service/parameters.service';
import { AccountingAccount } from 'src/app/model/AccountingAccount';

@Component({
  selector: 'app-crud-parameters',
  templateUrl: './crud-parameters.component.html',
  styleUrls: ['./crud-parameters.component.scss']
})
export class CrudParametersComponent implements OnInit {

  public accountForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private matDialogRef: MatDialogRef<ParametersComponent>,
    private parametersService: ParametersService,
    @Inject(MAT_DIALOG_DATA)public data: any) { }

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      name: [this.data.name, Validators.required],
      numberAccount: [this.data.numberAccount, Validators.required]
    });
  }

  onBack() {
    this.matDialogRef.close();
  }

  onSubmitForm() {
    if (isNaN(this.data.id)) {
      const formValue = this.accountForm.value;
      const account = new AccountingAccount();
      account.name = formValue.name;
      account.numberAccount = formValue.numberAccount;
      this.parametersService.addAccount(account);
      this.matDialogRef.close();
    } else {
      this.parametersService.editAccount(this.accountForm.value, this.data.id);
      this.matDialogRef.close();
    }
  }

}
