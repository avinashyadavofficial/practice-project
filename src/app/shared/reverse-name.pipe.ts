import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseName'
})
export class ReverseNamePipe implements PipeTransform {

  transform(value: string): string {
    if(!value)return'';
    return value.split('').reverse().join('');
  }

}
