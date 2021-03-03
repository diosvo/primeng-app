import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { Data } from 'src/app/configs/data-table/data';
import { CustomerService } from 'src/app/core/services/customer.service';
import { ICustomer, IRepresentative, IStatus } from 'src/app/shared/models/data-table.model';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
  providers: [MessageService]
})

export class TableDataComponent implements OnInit {

  // Definition
  customers: ICustomer[];
  selectedCustomers: ICustomer[];
  statuses: IStatus[] = Data.Statuses;
  representatives: IRepresentative[] = Data.Representatives;

  @ViewChild('dt') table: Table;

  constructor(private _customerService: CustomerService) { }

  ngOnInit(): void {
    this._customerService.onGetAllCustomer().subscribe(result => {
      this.customers = result;
    })

    this.customers.forEach(
      customer => {
        // console.log(new Date(customer.date));
        
        (customer.date = new Date(customer.date))
      }
    );
  }

  ngAfterViewInit() {
    /* console.log(this.table.filterGlobal)
    console.log(this.table) */
  }
}