import { Pipe,PipeTransform } from "@angular/core";
import { Service } from './service.model';

@Pipe({
    name: "filterPrice"
})
export class filterPricePipe implements PipeTransform {
    transform(array:Array<Service>, args:number[]): Array<Service> {
        if (args && (args[0] || args[0] === 0) && args[1]) {
            return array.filter(item => {
                return (item.price >= args[0] && item.price <= args[1]);
            } );
        }  else {
            return array;
        }

    }
}

@Pipe({
    name: "search"
})
export class searchPipe implements PipeTransform {
    transform(array:Array<Service>, args:string): Array<Service> {
        if (args && args.length > 0) {
            return array.filter(item => {
                return (item.title.toLowerCase().indexOf(args.toLowerCase()) !== -1);
            } );
        }  else {
            return array;
        }

    }
}