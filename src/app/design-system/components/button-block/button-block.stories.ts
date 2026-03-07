import { Meta, StoryObj } from '@storybook/angular';
import { ButtonBlockComponent } from './button-block.component';

const meta: Meta<ButtonBlockComponent> = {
  title: 'Design System/ButtonBlock',
  component: ButtonBlockComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    url: { control: 'text' },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary']
    }
  }
};

export default meta;
type Story = StoryObj<ButtonBlockComponent>;

export const Primary: Story = {
  args: {
    label: 'Get Started',
    url: 'https://example.com',
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Learn More',
    url: 'https://example.com',
    variant: 'secondary'
  }
};