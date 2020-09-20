import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[validValidation]',
  providers: [{
    provide: Directive,
    useExisting: ValidValidationDirective,
    multi: true
  }]
})
export class ValidValidationDirective {

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'color',
      'darkgreen'
    );

    this.renderer.setStyle(
      this.element.nativeElement,
      'font-style',
      'italic'
    );
  }

}
