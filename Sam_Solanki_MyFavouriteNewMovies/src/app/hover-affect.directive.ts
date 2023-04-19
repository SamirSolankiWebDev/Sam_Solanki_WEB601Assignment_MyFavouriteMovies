import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input('appHoverAffect') hoverAffect: string = '';

  constructor(private elm: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    if(this.hoverAffect === 'underline'){
      this.elm.nativeElement.style.textDecoration =this.hoverAffect;
    }else if(this.hoverAffect === 'bold'){
      this.elm.nativeElement.style.fontWeight = this.hoverAffect;
    }
  }

  @HostListener('mouseleave') onMouseLeave(){
    if(this.hoverAffect === 'underline'){
      this.elm.nativeElement.style.textDecoration = 'none';
    }else if(this.hoverAffect === 'bold'){
      this.elm.nativeElement.style.fontWeight = 'normal';
    }
  }

}
