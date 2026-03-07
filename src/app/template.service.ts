import { Injectable, signal, computed } from '@angular/core';
import { Block, BlockType, DEFAULT_BLOCKS } from './block.model';

@Injectable({ providedIn: 'root' })
export class TemplateService {
  private _blocks = signal<Block[]>([]);
  private _selectedId = signal<string | null>(null);

  readonly blocks = computed<Block[]>(() => this._blocks());
  readonly selectedId = computed<string | null>(() => this._selectedId());
  readonly selectedBlock = computed<Block | null>(() =>
    this._blocks().find(b => b.id === this._selectedId()) ?? null
  );

  addBlock(type: BlockType): void {
    const id = crypto.randomUUID();
    const defaults = DEFAULT_BLOCKS[type];
    this._blocks.update(blocks => [...blocks, { ...defaults, id } as Block]);
    this._selectedId.set(id);
  }

  removeBlock(id: string): void {
    this._blocks.update(blocks => blocks.filter(b => b.id !== id));
    if (this._selectedId() === id) {
      this._selectedId.set(null);
    }
  }

  selectBlock(id: string): void {
    this._selectedId.set(id);
  }

  updateBlock(id: string, changes: Partial<Block>): void {
    this._blocks.update(blocks =>
      blocks.map(b => b.id === id ? { ...b, ...changes } as Block : b)
    );
  }
}