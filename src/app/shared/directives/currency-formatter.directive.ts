import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Directive({
  selector: '[currencyFormatter]'
})

export class CurrencyFormatterDirective {
  currencyChars = new RegExp('[\.,]', 'g'); // Remove commas and dots

  constructor(public el: ElementRef, public renderer: Renderer2, private decimalPipe: DecimalPipe) {}

  ngOnInit() {
    this.format(this.el.nativeElement.value); // Format any initial values
  }

  @HostListener('input', ["$event.target.value"]) onInput(e: string) {
    this.format(e);
  };

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    event.preventDefault();
    this.format(event.clipboardData.getData('text/plain'));
  }

  format(val:string) {
    // 1. test for non-number characters and replace/remove them
    const numberFormat = parseInt(String(val).replace(this.currencyChars, ''));
    // console.log(numberFormat); // raw number

    // 2. format the number (add commas)
    const usd = this.decimalPipe.transform(numberFormat, '1.0', 'en-US');

    // 3. replace the input value with formatted numbers
    this.renderer.setProperty(this.el.nativeElement, 'value', usd);
  }
}
