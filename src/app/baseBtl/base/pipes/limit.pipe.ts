import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limit',
    pure: false
})
export class LimitPipe implements PipeTransform {
    transform(items: any[], filter: number, category: boolean): any {
        if (!items || !filter || !category) {
            return items;
        }
        return items.filter( ( item , index) => {
            return index < filter && category;
        });
    }
}