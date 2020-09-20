import { Directive, ElementRef } from '@angular/core';
import { Renderer2 } from "@angular/core";

@Directive({
  selector: '[invalidValidation]',
  providers: [{
    provide: Directive,
    useExisting: InvalidValidationDirective,
    multi: true
  }]
})
export class InvalidValidationDirective {

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'color',
      'darkred'
    );

  }

}
