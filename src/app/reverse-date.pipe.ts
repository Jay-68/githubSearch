import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseDate'
})
export class ReverseDatePipe implements PipeTransform {

  transform(updated_at: string): string {
    let newStr: string = "";
    for (var i = updated_at.length - 1; i>=0; i--){
      newStr += updated_at.charAt(i);
    }
    
    return null;
  }


}
