import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-block',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="header-block" [style.backgroundColor]="bgColor || 'var(--color-primary)'">
    <img
      [src]="logoUrl || ''"
      [alt]="'Logo'"
      class="header-block__logo"
      [class.header-block__logo--hidden]="!logoUrl"
    />
    <h1 class="header-block__title">{{ title }}</h1>
  </div>`,
  styleUrl: './header-block.component.scss'
})

export class HeaderBlockComponent {
  @Input({ required: true }) title!: string;
  @Input() logoUrl?: string;
  @Input() bgColor?: string;
}