import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Data } from 'src/app/configs/data-table/data';
import { ICustomer, IRepresentative, IStatus, ITableColumn } from 'src/app/shared/models/data-table.model';

@Component({
  selector: 'app-table-main',
  templateUrl: './table-main.component.html',
  styleUrls: ['../table-data.component.scss'],
})

export class TableMainComponent {
  @Input() customers: ICustomer[];
  @Input() selectedCustomers: ICustomer[];
  @Input() statuses: IStatus[] = Data.Statuses;
  @Input() representatives: IRepresentative[] = Data.Representatives;

  @Input() cols: ITableColumn[];
  @Input() exportName: string = "customers";
  @Input() loading: boolean;

  @Output() edited: EventEmitter<ICustomer> = new EventEmitter<ICustomer>();
  @Output() deleted: EventEmitter<ICustomer> = new EventEmitter<ICustomer>();

  editCustomer(customer: ICustomer) {
    this.edited.emit(customer);
  }

  deleteCustomer(customer: ICustomer) {
    this.deleted.emit(customer);
  }
}
