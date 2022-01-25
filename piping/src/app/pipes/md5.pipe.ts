import { Pipe, PipeTransform } from '@angular/core';
import { Md5 } from 'ts-md5';

@Pipe({
  name: 'mD5'
})
export class MD5Pipe implements PipeTransform {

  transform(value: string, args?: any): string {
    console.log(value);
    return Md5.hashStr(value);
  }

}
