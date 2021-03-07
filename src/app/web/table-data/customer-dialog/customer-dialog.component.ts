import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Data } from 'src/app/configs/data-table/data';
import { ICountry, ICustomer, IRepresentative, IStatus } from 'src/app/shared/models/data-table.model';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['../table-data.component.scss'],
})
export class CustomerDialogComponent {

  @Input() set selectedCustomers(value: ICustomer) {
    this.customer = Object.assign({}, value);
  }

  @Input() customer: ICustomer;
  @Input() countries: ICountry[];
  @Input() statuses: IStatus[] = Data.Statuses;
  @Input() representatives: IRepresentative[] = Data.Representatives;

  @Input() submitted: boolean;
  @Input() customerDialog: boolean;
  @Input() dialogTitle: string;

  @Output() hided = new EventEmitter();
  @Output() saved: EventEmitter<ICustomer> = new EventEmitter<ICustomer>();

  hideDialog() {
    this.hided.emit();
  }

  saveCustomer(customer: ICustomer) {
    this.saved.emit(customer);
  }
}
