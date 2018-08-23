import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterObj',
    pure: false
})
export class FilterObjPipe implements PipeTransform {

    public transform(items: any[], filter: {[index: string]:string},strict : boolean | {[index: string]:boolean} = false,caseSensitive : boolean = false ) : any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => {
            for(let key in filter) {
                if ( ( filter[key] && !item[key] ) ) { return false;}
                if ( ( item[key] || item[key] == '' ) ) {
                    let value : string = (caseSensitive)?item[key]:item[key].toUpperCase();
                    let filterValue : string = (caseSensitive)?filter[key]:filter[key].toUpperCase();
                    if ( ( !strict && typeof (strict) != 'object' ) || ( typeof (strict) == 'object' && !strict[key] ) ) {
                        if ( value.indexOf (filterValue)==-1 && value != filterValue) { return false; }
                    }else{
                        if (value != filterValue && filterValue) { return false; }
                    }
                }
            }
            return true;
        });
    }
}
