import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyFormatterDirective } from './currency-formatter.directive';
import { PercentageDirective } from './percentage.directive';

@NgModule({
  declarations: [
    CurrencyFormatterDirective,
    PercentageDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencyFormatterDirective,
    PercentageDirective
  ],
})

export class SharedDirectivesModule { }
