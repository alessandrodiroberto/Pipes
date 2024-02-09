import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucfirst',
})
export class UcfirstPipe implements PipeTransform {
  /*Trasforma la stringa:
    "Ciamo come va, spero tutto ok!""
    in:
    "Ciao Come Va, Spero Tutto Ok!"
  */
  transform(value: string, ...args: string[]): string {
    /*
    let result = '';
    let arr = value.split(' ');
    arr = arr.map((v) => {
      let str = v.trim();
      let first = str.substring(0, 1).toUpperCase();
      str = first + str.substring(1).toLocaleLowerCase();
      return str;
    });

    result = arr.join(' ');
    return result;
*/

    return value
      .split(' ')
      .map(
        (s) =>
          s.trim().substring(0, 1).toUpperCase() +
          s.substring(1).trim().toLocaleLowerCase()
      )
      .join(' ');
  }
}
