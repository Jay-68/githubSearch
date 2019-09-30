import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.backgroundColor='black';
  }
}
