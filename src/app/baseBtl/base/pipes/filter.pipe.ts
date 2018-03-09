import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: string | boolean | number): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => {
            return item == filter || item.indexOf(filter) != -1;
        });
    }
}