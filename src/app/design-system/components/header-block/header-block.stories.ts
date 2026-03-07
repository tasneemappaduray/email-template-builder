import { Meta, StoryObj } from '@storybook/angular';
import { HeaderBlockComponent } from './header-block.component';

const meta: Meta<HeaderBlockComponent> = {
  title: 'Design System/HeaderBlock',
  component: HeaderBlockComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    logoUrl: { control: 'text' },
    bgColor: { control: 'color' }
  }
};

export default meta;
type Story = StoryObj<HeaderBlockComponent>;

export const Default: Story = {
  args: {
    title: 'Welcome to Our Newsletter'
  }
};

export const WithLogoAndCustomColor: Story = {
  args: {
    title: 'Company Newsletter',
    logoUrl: 'https://picsum.photos/40/40',
    bgColor: '#2D3748'
  }
};