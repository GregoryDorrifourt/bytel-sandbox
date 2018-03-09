import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderObj',
    pure: false
})
export class orderObjPipe implements PipeTransform {
    transform(items: any[], field:string, reverse : boolean ): any {
        if (!items || !field) {
            return items;
        }
        items.sort((a:any,b:any) => {
            if(/^-?[\d.]+(?:e-?\d+)?$/.test(a[field])){
                return (parseFloat(a[field]) > parseFloat(b[field]) ? 1 : -1);
            }else{
                return (a[field] > b[field] ? 1 : -1);
            }
        });
        if(reverse) items.reverse();
        return items;
    }
}

/*



    return function(items, field, reverse) {
        var filtered = [];
        angular.forEach(items, function(item,key) {
            item.$key = key;
            filtered.push(item);
        });
        filtered.sort(function (a, b) {
            return (a[field] > b[field] ? 1 : -1);
        });
        if(reverse) filtered.reverse();
        return filtered;
    };
 */