import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button-block',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="button-block">
      <a
        [href]="url"
        [class]="'button-block__btn button-block__btn--' + (variant || 'primary')"
      >
        {{ label }}
      </a>
    </div>
  `,
  styleUrl: './button-block.component.scss'
})
export class ButtonBlockComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) url!: string;
  @Input() variant?: 'primary' | 'secondary' = 'primary';
}