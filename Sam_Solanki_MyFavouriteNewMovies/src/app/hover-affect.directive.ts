import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input('appHoverAffect') style: string = '';
  constructor(private el: ElementRef) { }
  

  @HostListener('mouseenter') onMouseEnter()  {
    if(this.style === 'bold'){
      this.el.nativeElement.style.fontWeight = this.style;
    } else {
      this.el.nativeElement.style.textDecoration = 'underline';
      this.el.nativeElement.style.fontWeight = 'bold';
    }
  }

  @HostListener('mouseleave') onMouseLeave()  {
    this.el.nativeElement.style.textDecoration = 'none';
    this.el.nativeElement.style.fontWeight = 'normal';
    
}

}