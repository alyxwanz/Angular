import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPasswordToggle]',
  exportAs: 'appPasswordToggle'
})
export class PasswordToggleDirective {
  visible: boolean = true;

  constructor(private el: ElementRef) {}

  onClick() {
    this.visible = !this.visible;

    if (!this.visible) {
      this.el.nativeElement.setAttribute('type', 'text');
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
    }
  }
}
