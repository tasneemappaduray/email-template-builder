import { Component } from '@angular/core';
import { TemplateBuilderComponent } from './template-builder/template-builder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemplateBuilderComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
