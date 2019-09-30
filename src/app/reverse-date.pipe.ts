import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseDate'
})
export class ReverseDatePipe implements PipeTransform {

  // tslint:disable-next-line: variable-name
  transform(updated_at: string): string {
    // tslint:disable-next-line: no-inferrable-types
    let newStr: string = '';
    for (let i = updated_at.length - 1; i >= 0; i--) {
      newStr += updated_at.charAt(i);
    }

    return null;
  }


}
