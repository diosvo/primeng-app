import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Data } from 'src/app/configs/data-table/data';
import { CustomerService } from 'src/app/core/services/customer.service';
import { ICountry, ICustomer, IRepresentative, IStatus, ITableColumn } from 'src/app/shared/models/data-table.model';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class TableDataComponent implements OnInit {

  // Definition
  customers: ICustomer[];
  selectedCustomers: ICustomer[];
  items: MenuItem[];

  cols: ITableColumn[];
  exportColumns: any[];
  countries: ICountry[];
  statuses: IStatus[] = Data.Statuses;
  representatives: IRepresentative[] = Data.Representatives;

  @ViewChild('dt') table: Table;
  customer: ICustomer;
  submitted: boolean;
  loading: boolean;
  customerDialog: boolean;
  dialogTitle: string;
  exportName: string = "customers";

  constructor(private _customerService: CustomerService,
    private _messageService: MessageService,
    private _confirmationService: ConfirmationService,
    private _cdr: ChangeDetectorRef) { }

  async ngOnInit() {
    this.loadCustomers();

    this._customerService.onGetCountries().subscribe(result => {
      this.countries = result
    })

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'country.name', header: 'Country' },
      { field: 'representative.name', header: 'Agent' },
      { field: 'date', header: 'Date' },
      { field: 'status', header: 'Status' },
      { field: 'activity', header: 'Activity' },
    ];
    this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));
    this.buttonExportFiles();
  }

  loadCustomers() {
    this._customerService.getAllCustomers().subscribe(result => {
      this.customers = result;
    })
  }

  ngAfterViewInit() {
    // For lazy ding
    // NG0100: ExpressionChangedAfterItHasBeenCheckedError
    this._cdr.detectChanges();
  }

  /* 
  - Export files
  */

  buttonExportFiles() {
    this.items = [{
      label: 'File',
      items: [{
        label: 'CSV',
        icon: 'pi pi-file-o',
        command: () => {
          this.table.exportCSV();
        }
      },
      {
        label: 'Excel',
        icon: 'pi pi-file-excel',
        command: () => {
          this.exportExcel();
        }
      }]
    }];
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.customers);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "customers");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + this.getCurrentDay() + EXCEL_EXTENSION)
    });
  }

  private getCurrentDay() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let MM = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    return `${MM + '/' + dd + '/' + yyyy}`;
  }

  /* 
  - Customer functions
  */

  async createNewCustomer() {
    this.dialogTitle = "Create New Customer"
    this.customer = {};
    this.submitted = false;
    this.customerDialog = true;
  }

  editCustomer(customer: ICustomer) {
    this.dialogTitle = "Update Customer Details"
    this.customer = { ...customer };
    this.customerDialog = true;
  }

  async saveCustomer(customer: ICustomer) {
    this.submitted = true;

    if (this.customer.name.trim()) {
      {
        if (this.customer.id) {
          this.customers[this.findIndexById(customer.id)] = this.customer;
          this._messageService.add({ severity: 'info', summary: 'Successful', detail: 'Customer Updated', life: 3000 });
        } else {
          this._customerService.createNewCustomer(customer).subscribe(result => {
            this.loadCustomers();
          })
          this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Customer Created', life: 3000 });
        }
        this.customerDialog = false;
        this.customer = {};
      }
    }
  }

  async deleteCustomer(customer: ICustomer) {
    this._confirmationService.confirm({
      message: 'Are you sure you want to delete ' + customer.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.customers = this.customers.filter(val => val.id !== customer.id);
        this.customer = {};
        this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Customer Deleted', life: 3000 });
      }
    });
  }

  async deleteMultipleCustomers() {
    this._confirmationService.confirm({
      message: 'Are you sure you want to delete the selected customers?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.customers = this.customers.filter(val => !this.selectedCustomers.includes(val));
        this.selectedCustomers = null;
        this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Selected Customers Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.customerDialog = false;
    this.submitted = false;
  }

  private findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  private createId(): number {
    let id = this.customers.length + 1;
    return id;
  }
}