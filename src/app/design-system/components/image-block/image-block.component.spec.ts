import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageBlockComponent } from './image-block.component';

describe('ImageBlockComponent', () => {
  let fixture: ComponentFixture<ImageBlockComponent>;
  let component: ImageBlockComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageBlockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageBlockComponent);
    component = fixture.componentInstance;
    component.src = 'https://example.com/image.png';
    component.alt = 'Test image';
    fixture.detectChanges();
  });

  it('should render the image with correct src and alt', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('.image-block__img');
    expect(img.src).toBe('https://example.com/image.png');
    expect(img.alt).toBe('Test image');
  });

  it('should default width to 100%', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('.image-block__img');
    expect(img.style.width).toBe('100%');
  });

  it('should apply a custom width when provided', () => {
  fixture.componentRef.setInput('width', '50%');
  fixture.detectChanges();
  const img: HTMLImageElement = fixture.nativeElement.querySelector('.image-block__img');
  expect(img.style.width).toBe('50%');
});

  it('should render inside the image-block wrapper', () => {
    const wrapper: HTMLElement = fixture.nativeElement.querySelector('.image-block');
    expect(wrapper).toBeTruthy();
  });
});