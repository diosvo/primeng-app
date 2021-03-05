import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { Data } from 'src/app/configs/data-table/data';
import { CustomerService } from 'src/app/core/services/customer.service';
import { ICustomer, IRepresentative, IStatus } from 'src/app/shared/models/data-table.model';

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

  cols: any[];
  exportColumns: any[];
  _selectedColumns: ICustomer[];

  statuses: IStatus[] = Data.Statuses;
  representatives: IRepresentative[] = Data.Representatives;

  @ViewChild('dt') table: Table;
  customer: ICustomer;
  loading: boolean;
  exportName = "customers"

  constructor(private _customerService: CustomerService,
    private _messageService: MessageService,
    private _confirmationService: ConfirmationService,
    private _primengConfig: PrimeNGConfig,
    private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._customerService.onGetAllCustomer().subscribe(result => {
      this.customers = result;
    })

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'country.name', header: 'Country' },
      { field: 'representative.name', header: 'Agent' },
      { field: 'date', header: 'Date' },
      { field: 'status', header: 'Status' },
      { field: 'activity', header: 'Activity' },
      { field: 'config', header: 'Actions' },
    ];

    this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));

    this.buttonExportFiles();
  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }
  ngAfterViewInit() {
    // For lazy ding
    // NG0100: ExpressionChangedAfterItHasBeenCheckedError
    this._cdr.detectChanges();
  }

  selectCustomer(customer: ICustomer) {
    /* this._messageService.add({severity:'info', summary:'Customer Selected', detail: customer.name}); */
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

  editCustomer(customer: ICustomer) {

  }

  deleteCustomer(customer: ICustomer) {
    this._confirmationService.confirm({
      message: 'Are you sure you want to delete ' + customer.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.customers = this.customers.filter(val => val.id !== customer.id);
        console.log(this.customers);

        this.customer = {};
        this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Customer Deleted', life: 3000 });
      }
    });
  }

  deleteMultipleCustomers() {
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
}