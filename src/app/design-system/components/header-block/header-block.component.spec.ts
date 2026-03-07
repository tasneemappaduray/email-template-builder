import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderBlockComponent } from './header-block.component';

describe('HeaderBlockComponent', () => {
  let fixture: ComponentFixture<HeaderBlockComponent>;
  let component: HeaderBlockComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBlockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderBlockComponent);
    component = fixture.componentInstance;
    component.title = 'Test Header';
    fixture.detectChanges();
  });

  it('should render the title', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.header-block__title')?.textContent).toBe('Test Header');
  });

  it('should apply a custom bgColor when provided', () => {
  fixture.componentRef.setInput('bgColor', '#FF0000');
  fixture.detectChanges();
  const el: HTMLElement = fixture.nativeElement.querySelector('.header-block');
  expect(el.style.backgroundColor).toBe('rgb(255, 0, 0)');
});

it('should render an img tag when logoUrl is provided', () => {
  fixture.componentRef.setInput('logoUrl', 'https://example.com/logo.png');
  fixture.componentRef.setInput('title', 'Test Header');
  fixture.detectChanges();
  const el: HTMLElement = fixture.nativeElement;
  expect(el.querySelector('.header-block__logo')).toBeTruthy();
});

  it('should render an img tag when logoUrl is provided', () => {
    component.logoUrl = 'https://example.com/logo.png';
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.header-block__logo')).toBeTruthy();
  });

  it('should not show logo when logoUrl is not provided', () => {
  const img: HTMLElement = fixture.nativeElement.querySelector('.header-block__logo');
  expect(img.classList).toContain('header-block__logo--hidden');
});

it('should show logo when logoUrl is provided', () => {
  fixture.componentRef.setInput('logoUrl', 'https://example.com/logo.png');
  fixture.detectChanges();
  const img: HTMLElement = fixture.nativeElement.querySelector('.header-block__logo');
  expect(img.classList).not.toContain('header-block__logo--hidden');
});
});