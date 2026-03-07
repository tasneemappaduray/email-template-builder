import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-image-block',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="image-block">
      <img
        [src]="src"
        [alt]="alt"
        [style.width]="width || '100%'"
        class="image-block__img"
      />
    </div>
  `,
  styleUrl: './image-block.component.scss'
})
export class ImageBlockComponent {
  @Input({ required: true }) src!: string;
  @Input({ required: true }) alt!: string;
  @Input() width?: string;
}