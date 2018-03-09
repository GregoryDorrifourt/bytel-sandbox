import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value && value !== 0) {
      return '';
    }
    const price: string[] = parseFloat(value.toString()).toFixed(2).split('.');
    if (price[1].length === 1) { price[1] += '0'; }
    return `<span>${price[0]}</span><sup>€${price[1]}</sup>`;
  }

}
