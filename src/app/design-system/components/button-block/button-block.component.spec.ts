import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonBlockComponent } from './button-block.component';

describe('ButtonBlockComponent', () => {
  let fixture: ComponentFixture<ButtonBlockComponent>;
  let component: ButtonBlockComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonBlockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonBlockComponent);
    component = fixture.componentInstance;
    component.label = 'Click Me';
    component.url = 'https://example.com';
    fixture.detectChanges();
  });

  it('should render the label and url', () => {
    const btn: HTMLAnchorElement = fixture.nativeElement.querySelector('.button-block__btn');
    expect(btn.textContent?.trim()).toBe('Click Me');
    expect(btn.href).toBe('https://example.com/');
  });

  it('should default to primary variant', () => {
    const btn: HTMLElement = fixture.nativeElement.querySelector('.button-block__btn');
    expect(btn.classList).toContain('button-block__btn--primary');
  });

  it('should apply secondary variant when provided', () => {
  fixture.componentRef.setInput('variant', 'secondary');
  fixture.detectChanges();
  const btn: HTMLElement = fixture.nativeElement.querySelector('.button-block__btn');
  expect(btn.classList).toContain('button-block__btn--secondary');
});

it('should not apply primary class when variant is secondary', () => {
  fixture.componentRef.setInput('variant', 'secondary');
  fixture.detectChanges();
  const btn: HTMLElement = fixture.nativeElement.querySelector('.button-block__btn');
  expect(btn.classList).not.toContain('button-block__btn--primary');
});
});