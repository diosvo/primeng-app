import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Data } from 'src/app/configs/data-table/data';
import { CountriesService } from 'src/app/core/services/countries.service';
import { CustomerService } from 'src/app/core/services/customer.service';
import { ICountry, ICustomer, IRepresentative, IStatus, ITableColumn } from 'src/app/shared/models/data-table.model';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class TableDataComponent implements OnInit, AfterViewInit {

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
  exportName = 'customers';

  constructor(private customerService: CustomerService,
              private countriesService: CountriesService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private cdr: ChangeDetectorRef) { }

  async ngOnInit(): Promise<void> {
    await this.loadCustomers();
    await this.loadCountries();

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

  async loadCustomers(): Promise<void> {
    this.customerService.all().subscribe((result: any) => {
      this.customers = result.customers;
    });
  }

  async loadCountries(): Promise<void> {
    this.countriesService.all().subscribe((result: any) => {
      this.countries = result.countries;
    });
  }

  ngAfterViewInit(): void {
    // For lazy ding
    // NG0100: ExpressionChangedAfterItHasBeenCheckedError
    this.cdr.detectChanges();
  }

  /*
  - Export files
  */

  buttonExportFiles(): void {
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

  exportExcel(): void {
    import('xlsx').then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.customers);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'customers');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then(FileSaver => {
      const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + this.getCurrentDay() + EXCEL_EXTENSION);
    });
  }

  /* - Customer functions */

  async createNewCustomer(): Promise<void> {
    this.dialogTitle = 'Create New Customer';
    console.log(this.customer);
    this.customer = {};
    this.submitted = false;
    this.customerDialog = true;
  }

  async editCustomer(customer: ICustomer): Promise<void> {
    this.dialogTitle = 'Update Customer Details';
    this.customer = { ...customer };
    this.customerDialog = true;
  }

  async saveCustomer(customer: ICustomer): Promise<void> {
    this.submitted = true;

    if (this.customer.id) {
      // debugger
      this.customerService.update(customer).subscribe({
        next: () => this.loadCustomers()
      });
      this.messageService.add({ severity: 'info', summary: 'Successful', detail: 'Customer Updated', life: 3000 });
    } else {
      this.customer.date = new Date();
      this.customerService.create(customer).subscribe(result => {
        this.loadCustomers();
      });
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Customer Created', life: 3000 });
    }
    this.customerDialog = false;
    this.customer = {};
  }

  async deleteCustomer(customer: ICustomer): Promise<void> {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + customer.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.customerService.delete(customer).subscribe(result => {
          this.loadCustomers();
        });
        this.customer = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Customer Deleted', life: 3000 });
      }
    });
  }

  async deleteMultipleCustomers(): Promise<void> {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected customers?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.customers = this.customers.filter(val => !this.selectedCustomers.includes(val));
        this.selectedCustomers = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Selected Customers Deleted', life: 3000 });
      }
    });
  }

  hideDialog(): void {
    this.customerDialog = false;
    this.submitted = false;
  }

  private getCurrentDay(): string {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const MM = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    return `${MM + '/' + dd + '/' + yyyy}`;
  }
}
