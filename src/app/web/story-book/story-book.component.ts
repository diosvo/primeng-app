import { Component, OnInit } from '@angular/core';
import { FieldArrayType, FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { RbnMessageService } from 'rbn-common-lib';

@Component({
  selector: 'app-story-book',
  templateUrl: './story-book.component.html',
  styleUrls: ['./story-book.component.scss'],
  providers: [TranslateService, MessageService, RbnMessageService]
})
export class StoryBookComponent extends FieldArrayType implements OnInit {
  header = 'Hello';
  body = 'Nhung nè hihi';

  fromDate = new Date();
  toDate = new Date();
  showTime = true;

  hi = 'hi';
  hello = 'hello';
  keyOption: any[] = [{ value: 'Test_1', label: '1' }, { value: 'Test_2', label: '2' }];
  valueOption: any[] = [{ value: 'Test_4', label: '4' }, { value: 'Test_3', label: '3' }];
  isDropdownRequired = false;
  needFormTag = true;
  idPrefix = '';

  pageTop = {
    logo: {
      action: undefined,
      image: 'assets/images/ribbon-login-logo.png',
      productName: 'DV9'
    },
    profiles: [
      {
        label: 'Profile',
        icon: 'pi pi-user',
        expanded: true,
        items: [
          {
            label: 'New',
            icon: 'pi pi-pencil',
            command: ($event) => {
            }
          },
          {
            label: 'Log Out',
            icon: 'pi pi-fw pi-external-link',
            command: ($event) => {
            }
          }
        ]
      },
      {
        label: 'System Information',
        icon: 'pi pi-info-circle',
        expanded: true,
        items: [
          {
            label: 'v20.04.00R001',
            icon: 'pi pi-star-o'
          }
        ]
      },
      {
        label: 'Help Center',
        icon: 'pi pi-question-circle',
        expanded: true,
        items: [
          {
            label: 'Protect Online Documentation',
            icon: 'pi pi-file-o',
            command: ($event) => {
            }
          }
        ]
      },
      {
        label: 'License Report',
        icon: 'pi pi-file-o',
        expanded: true,
        items: [
          { label: '3 Active', icon: 'pi pi-star-o' },
          { label: '1 Expired', icon: 'pi pi-question-circle' }
        ]
      }
    ],
    externalIcon: [
      {
        icon: 'pi pi-chart-bar',
        command: (item: any) => {
          console.log('call click chart icon: ', item);
        }
      },
      {
        icon: 'pi pi-bell',
        command: (item: any) => {
          console.log('call click bell icon: ', item);
        }
      },
      {
        icon: 'pi pi-question',
        command: (item: any) => {
          console.log('call click question icon: ', item);
        }
      }
    ]
  };

  json = {
    'Model & Mode': 'SBC 1000 | Perpetual - 0 Calls',
    'MAC Address': '00:10:23:c0:50:ca',
    'Firmware version': '9.0.0v548',
    'Active address': '10.56.219.105 | 172.30.0.1',
    'Description': 'Nhung nè hihi',
    'Located in': 'ALL > Roger',
    'Policy Compliant': 'N/A'
  };

  field = {
    key: 'button',
    type: 'rbn-button',
    templateOptions: {
      text: 'CLICK ME!',
      onClick: () => {
        console.log('hi');
      }
    }
  }

  info = {
    "title": "IDH",
    "description": "The SBC Core platform provides security, session control, bandwidth management, advanced media services, and integrated billing/reporting tools.",
    "labelBtnForward": "Launch IDH"
  }

  totalNotification = 0;
  data = {
    title: 'Header Test',
    breadcrumb:
      [{
        label: 'VNF',
        command: (event) => {
          console.log('call back');
        }
      },
      { label: 'Lifecycle' }],
    topButton: {
      label: 'Table action',
      icon: 'fab fa-jedi-order',
      title: 'Test action',
      onClick: () => {
        console.log('on click top button');
      },
      iconPos: 'right',
    }
  }

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onSubmit($event: Event): void {
    console.log($event);
  }

  eventDateRangeEmitter($event: any): void {
    console.log($event);
  }

  forwardToIDH = () => {
    console.log('test event evOnClickBtnForward');
  }

  backButtonAction($event: any): void {
    console.log($event);
  }
}
