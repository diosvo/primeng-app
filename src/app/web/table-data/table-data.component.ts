import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent, MessageService, PrimeNGConfig } from 'primeng/api';
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
  datasource: ICustomer[];
  totalRecords: number;

  statuses: IStatus[] = Data.Statuses;
  representatives: IRepresentative[] = Data.Representatives;

  @ViewChild('dt') table: Table;
  selectedItem: ICustomer;
  loading: boolean;

  constructor(private _customerService: CustomerService,
    private _messageService: MessageService,
    private _primengConfig: PrimeNGConfig,
    private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._customerService.onGetAllCustomer().subscribe(result => {
      this.datasource = result;
      this.totalRecords = result.length;
    })
  }

  loadCustomers(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      if (this.datasource) {
        this.customers = this.datasource.slice(event.first, (event.first + event.rows));

        this.customers.forEach(
          customer => {
            (customer.date = new Date(customer.date))
          }
        );

        this.loading = false;
        this._primengConfig.ripple = true;
      }
    }, 1000);
  }

  ngAfterViewInit() {
    // NG0100: ExpressionChangedAfterItHasBeenCheckedError
    this._cdr.detectChanges();
  }

  selectCustomer(customer: ICustomer) {
    /* this._messageService.add({severity:'info', summary:'Customer Selected', detail: customer.name}); */
  }

  exportPdf() {
    /* import("jspdf").then(jsPDF => {
      import("jspdf-autotable").then(x => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(this.exportColumns, this.products);
        doc.save('products.pdf');
      })
    }) */
  }

  exportExcel() {
    /* import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.products);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "products");
    }); */
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    /* import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }); */
  }
}