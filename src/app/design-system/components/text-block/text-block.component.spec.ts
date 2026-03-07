import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextBlockComponent } from './text-block.component';

describe('TextBlockComponent', () => {
  let fixture: ComponentFixture<TextBlockComponent>;
  let component: TextBlockComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBlockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TextBlockComponent);
    component = fixture.componentInstance;
    component.content = 'Hello world';
    fixture.detectChanges();
  });

  it('should render the content', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.text-block__content')?.textContent).toBe('Hello world');
  });

  it('should default alignment to left', () => {
    const el: HTMLElement = fixture.nativeElement.querySelector('.text-block');
    expect(el.style.textAlign).toBe('left');
  });

 it('should apply center alignment when provided', () => {
  fixture.componentRef.setInput('alignment', 'center');
  fixture.detectChanges();
  const el: HTMLElement = fixture.nativeElement.querySelector('.text-block');
  expect(el.style.textAlign).toBe('center');
});

it('should apply right alignment when provided', () => {
  fixture.componentRef.setInput('alignment', 'right');
  fixture.detectChanges();
  const el: HTMLElement = fixture.nativeElement.querySelector('.text-block');
  expect(el.style.textAlign).toBe('right');
});
});