import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeadline]'
})
export class HeadlineDirective {

  constructor (private elementRef: ElementRef, private render: Renderer2){
    this.render.setStyle(this.elementRef.nativeElement, 'font-size', '20')

  }

}
