import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringFormatter'
})

export class StringFormatterPipe implements PipeTransform {

  transform(text: string) {
    let sliceText = text.slice(0, 35);

    if (sliceText.length > 35) {
      text += '...';
    }
    return sliceText;
  }
}
