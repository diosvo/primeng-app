import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';

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
    private _config: PrimeNGConfig) { }

  ngOnInit(): void {
    this.filterMatchMode();

    this._customerService.onGetAllCustomer().subscribe(result => {
      this.customers = result;
    })

    console.log(this.statuses);
    
  }

  filterMatchMode() {
    this._config.filterMatchModeOptions = {
      text: [
        FilterMatchMode.STARTS_WITH,
        FilterMatchMode.CONTAINS,
        FilterMatchMode.NOT_CONTAINS,
        FilterMatchMode.ENDS_WITH,
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS
      ],
      numeric: [
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
        FilterMatchMode.LESS_THAN,
        FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
        FilterMatchMode.GREATER_THAN,
        FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
      ],
      date: [
        FilterMatchMode.DATE_IS,
        FilterMatchMode.DATE_IS_NOT,
        FilterMatchMode.DATE_BEFORE,
        FilterMatchMode.DATE_AFTER
      ]
    }
  }
}