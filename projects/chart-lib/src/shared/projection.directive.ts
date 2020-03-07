import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[gaProjection]',
})
export class ProjectionDirective {
  @Input() type: string;
  @Input() order: number
  @Input('gaProjection') name: string;

  constructor(public template: TemplateRef<any>) { }

}
