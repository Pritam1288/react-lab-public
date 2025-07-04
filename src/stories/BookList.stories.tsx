import type { Meta, StoryObj } from '@storybook/react-webpack5';
import BookList from '../Components/BookList/index.tsx';

const meta: Meta<typeof BookList> = {
  title: 'Components/BookList',
  component: BookList,
};

export default meta;

type Story = StoryObj<typeof BookList>;

export const Default: Story = {
  args: {
    books: ['The Great Gatsby', '1984', 'To Kill a Mockingbird'],
  },
};

export const Empty: Story = {
  args: {
    books: [],
  },
};
