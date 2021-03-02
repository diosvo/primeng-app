import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

import { Data } from 'src/app/configs/data-table/data';
import { CustomerService } from 'src/app/core/services/customer.service';
import { ICustomer, IRepresentative, IStatus } from 'src/app/shared/models/data-table.model';
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})

export class TableDataComponent implements OnInit {

  // Definition
  customers: ICustomer[];
  selectedCustomers: ICustomer[];
  statuses: IStatus[] = Data.Statuses;
  representatives: IRepresentative[] = Data.Representatives;

  constructor(private _customerService: CustomerService,
    private _primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this._customerService.onGetAllCustomer().subscribe(result => {
      this.customers = result
      console.log(result);

    })
  }
}