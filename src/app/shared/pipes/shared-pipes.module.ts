import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StringFormatterPipe } from './string-formatter.pipe';

@NgModule({
  declarations: [
    StringFormatterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StringFormatterPipe
  ],
})

export class SharedPipesModule { }
