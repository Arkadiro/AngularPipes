import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter: string): any {
    if(value.length === 0 || filter === ''){
      return value;
    }
    const resultArray= [];
    for (let item of value) {
      if (item.status === filter){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
