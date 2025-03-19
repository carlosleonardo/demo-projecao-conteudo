import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilhoComponent } from './components/filho/filho.component';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FilhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo-projecao-conteudo';
}
