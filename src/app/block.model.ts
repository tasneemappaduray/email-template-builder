export type BlockType = 'header' | 'text' | 'image' | 'button';

export interface BaseBlock {
  id: string;
  type: BlockType;
}

export interface HeaderBlock extends BaseBlock {
  type: 'header';
  title: string;
  logoUrl?: string;
  bgColor?: string;
}

export interface TextBlock extends BaseBlock {
  type: 'text';
  content: string;
  alignment?: 'left' | 'center' | 'right';
}

export interface ImageBlock extends BaseBlock {
  type: 'image';
  src: string;
  alt: string;
  width?: string;
}

export interface ButtonBlock extends BaseBlock {
  type: 'button';
  label: string;
  url: string;
  variant?: 'primary' | 'secondary';
}

export type Block = HeaderBlock | TextBlock | ImageBlock | ButtonBlock;

export const DEFAULT_BLOCKS: Record<BlockType, Omit<Block, 'id'>> = {
  header: { type: 'header', title: 'Your Header Title', bgColor: '#C9847A' } as Omit<HeaderBlock, 'id'>,
  text:   { type: 'text',   content: 'Your text content goes here.', alignment: 'left' } as Omit<TextBlock, 'id'>,
  image:  { type: 'image',  src: 'https://picsum.photos/600/200', alt: 'Sample image' } as Omit<ImageBlock, 'id'>,
  button: { type: 'button', label: 'Click Here', url: 'https://example.com', variant: 'primary' } as Omit<ButtonBlock, 'id'>
};