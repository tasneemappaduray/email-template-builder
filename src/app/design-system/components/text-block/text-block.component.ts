import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-block',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-block" [style.textAlign]="alignment || 'left'">
      <p class="text-block__content">{{ content }}</p>
    </div>
  `,
  styleUrl: './text-block.component.scss'
})
export class TextBlockComponent {
  @Input({ required: true }) content!: string;
  @Input() alignment?: 'left' | 'center' | 'right' = 'left';
}