import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateService } from '../template.service';
import { Block, BlockType, HeaderBlock, TextBlock, ImageBlock, ButtonBlock } from '../block.model';
import { HeaderBlockComponent } from '../design-system/components/header-block/header-block.component';
import { TextBlockComponent } from '../design-system/components/text-block/text-block.component';
import { ImageBlockComponent } from '../design-system/components/image-block/image-block.component';
import { ButtonBlockComponent } from '../design-system/components/button-block/button-block.component';

@Component({
  selector: 'app-template-builder',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    FormsModule,
    HeaderBlockComponent,
    TextBlockComponent,
    ImageBlockComponent,
    ButtonBlockComponent
  ],
  templateUrl: './template-builder.component.html',
  styleUrl: './template-builder.component.scss'
})
export class TemplateBuilderComponent {
  readonly service = inject(TemplateService);

  readonly blockTypes: { type: BlockType; label: string }[] = [
    { type: 'header', label: 'Header' },
    { type: 'text',   label: 'Text' },
    { type: 'image',  label: 'Image' },
    { type: 'button', label: 'Button' }
  ];

  addBlock(type: BlockType): void {
    this.service.addBlock(type);
  }

  removeBlock(id: string): void {
    this.service.removeBlock(id);
  }

  selectBlock(id: string): void {
    this.service.selectBlock(id);
  }

  updateBlock(id: string, changes: Partial<Block>): void {
    this.service.updateBlock(id, changes);
  }

  asHeader(block: Block): HeaderBlock { return block as HeaderBlock; }
  asText(block: Block):   TextBlock   { return block as TextBlock; }
  asImage(block: Block):  ImageBlock  { return block as ImageBlock; }
  asButton(block: Block): ButtonBlock { return block as ButtonBlock; }
}