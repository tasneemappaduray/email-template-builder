import { Meta, StoryObj } from '@storybook/angular';
import { ImageBlockComponent } from './image-block.component';

const meta: Meta<ImageBlockComponent> = {
  title: 'Design System/ImageBlock',
  component: ImageBlockComponent,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<ImageBlockComponent>;

export const FullWidth: Story = {
  args: {
    src: 'https://picsum.photos/600/200',
    alt: 'Full width banner image'
  }
};

export const HalfWidth: Story = {
  args: {
    src: 'https://picsum.photos/300/200',
    alt: 'Half width image',
    width: '50%'
  }
};