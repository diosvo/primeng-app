import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { StoryBookRoutingModule } from './story-book-routing.module';
import { StoryBookComponent } from './story-book.component';
@NgModule({
  declarations: [StoryBookComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    StoryBookRoutingModule
  ]
})
export class StoryBookModule { }
