import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumPipe'
})
export class EnumPipePipe implements PipeTransform {

  transform(value, args:string[]) : any {
    let keys = [];
    
    for (var enumMember in value) {
      if (!isNaN(parseInt(enumMember))) {
        keys.push({key: enumMember, value: value[enumMember]});
      } 
    }
    return keys;
  }

}
