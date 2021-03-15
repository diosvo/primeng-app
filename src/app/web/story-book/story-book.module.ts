import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule, DaterangepickerModule, HeaderalertModule, KeyValueModule, NotificationGlobalModule, PageHeaderModule, PageTopModule, RbnDynamicFormsModule, ReadOnlyFormModule, SearchGlobalModule, ServicesCardModule } from 'rbn-common-lib';
import { StoryBookRoutingModule } from './story-book-routing.module';
import { StoryBookComponent } from './story-book.component';
@NgModule({
  declarations: [StoryBookComponent],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    DialogModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    AccordionModule,
    StoryBookRoutingModule,
    DaterangepickerModule,
    HeaderalertModule,
    SearchGlobalModule,
    KeyValueModule,
    NotificationGlobalModule,
    PageTopModule,
    ServicesCardModule,
    ReadOnlyFormModule,
    RbnDynamicFormsModule,
    PageHeaderModule
  ],
  providers: [TranslateService]
})
export class StoryBookModule { }
