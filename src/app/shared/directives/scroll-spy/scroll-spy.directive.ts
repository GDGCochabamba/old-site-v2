import { Directive, OnInit, ElementRef } from '@angular/core';

import { ScrollSpy } from 'materialize-css';

@Directive({
  selector: '[gdgScrollSpy]'
})
export class ScrollSpyDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    ScrollSpy.init(this.elementRef.nativeElement);
  }
}
