import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDi3Highlight]'
})
export class HighlightDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('appDi3Highlight') highlightColor: string;

  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'cyan');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.style.backgroundColor = color;
  }
}
