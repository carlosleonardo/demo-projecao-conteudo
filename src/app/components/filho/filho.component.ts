import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
  contentChild,
  input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'tr[app-filho]',
  imports: [NgTemplateOutlet],
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css',
})
export class FilhoComponent {
  parametro = input<number>();
  //@ContentChild(TemplateRef) template!: TemplateRef<any>;
  template = contentChild.required<TemplateRef<any>>(TemplateRef);
}
