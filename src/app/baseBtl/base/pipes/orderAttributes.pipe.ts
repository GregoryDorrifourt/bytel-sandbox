import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderAttributes',
    pure: false
})
export class orderAttributesPipe implements PipeTransform {
    
    private static readonly SORT_ATTRIBUTE_1: string = 'sort_order';
    private static readonly SORT_ATTRIBUTE_2: string = 'label';

    transform(items: any[], active: boolean, reverse : boolean ): any {
        if (!items || !active) {
            return items;
        }

        let filtered = [];

        for(let i in items) {
            let item = items[i];
            if (!item.hasOwnProperty(orderAttributesPipe.SORT_ATTRIBUTE_1)){
                item[orderAttributesPipe.SORT_ATTRIBUTE_1] = 99;
            }

            filtered.push(item);
        }
        
        filtered.sort((a:any, b:any) => {
            return (a[orderAttributesPipe.SORT_ATTRIBUTE_1] - b[orderAttributesPipe.SORT_ATTRIBUTE_1]) || ((a[orderAttributesPipe.SORT_ATTRIBUTE_2] < b[orderAttributesPipe.SORT_ATTRIBUTE_2]) ? -1 : 1);
        });

        if(reverse) filtered.reverse();

        return filtered;
    }
}