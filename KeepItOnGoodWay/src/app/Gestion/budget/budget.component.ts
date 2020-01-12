import { Component, OnInit, OnDestroy } from '@angular/core';
import { Charge } from 'src/app/model/charge';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ChargeServiceService } from 'src/app/service/charge-service.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit, OnDestroy {


  constructor(private chargeService: ChargeServiceService, private dialog?: MatDialog) { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    
  }

  
}
