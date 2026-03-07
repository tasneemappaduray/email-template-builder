import { Meta, StoryObj } from '@storybook/angular';
import { TextBlockComponent } from './text-block.component';

const meta: Meta<TextBlockComponent> = {
  title: 'Design System/TextBlock',
  component: TextBlockComponent,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    alignment: {
      control: 'radio',
      options: ['left', 'center', 'right']
    }
  }
};

export default meta;
type Story = StoryObj<TextBlockComponent>;

export const Default: Story = {
  args: {
    content: 'This is a sample paragraph for your email template. You can customise this text to suit your message.',
    alignment: 'left'
  }
};

export const Centered: Story = {
  args: {
    content: 'Centered text works great for announcements or short impactful statements.',
    alignment: 'center'
  }
};