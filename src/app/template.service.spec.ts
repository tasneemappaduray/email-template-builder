import { TestBed } from '@angular/core/testing';
import { TemplateService } from './template.service';

describe('TemplateService', () => {
  let service: TemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateService);
  });

  it('should start with no blocks', () => {
    expect(service.blocks()).toEqual([]);
  });

  it('should add a block and select it', () => {
    service.addBlock('header');
    expect(service.blocks().length).toBe(1);
    expect(service.blocks()[0].type).toBe('header');
    expect(service.selectedId()).toBe(service.blocks()[0].id);
  });

  it('should remove a block by id', () => {
    service.addBlock('text');
    const id = service.blocks()[0].id;
    service.removeBlock(id);
    expect(service.blocks().length).toBe(0);
  });

  it('should clear selectedId when the selected block is removed', () => {
    service.addBlock('button');
    const id = service.blocks()[0].id;
    service.removeBlock(id);
    expect(service.selectedId()).toBeNull();
  });

  it('should update a block\'s properties', () => {
    service.addBlock('text');
    const id = service.blocks()[0].id;
    service.updateBlock(id, { content: 'Updated content' } as any);
    const updated = service.blocks()[0] as any;
    expect(updated.content).toBe('Updated content');
  });

  it('should select a block by id', () => {
    service.addBlock('image');
    service.addBlock('button');
    const firstId = service.blocks()[0].id;
    service.selectBlock(firstId);
    expect(service.selectedId()).toBe(firstId);
  });
});