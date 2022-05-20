import { render, screen } from '@testing-library/react';
import Calculator from './calculator';

test('renders calculator', () => {
  render(<Calculator />);
  const linkElement = screen.getByDisplayValue('0');
  expect(linkElement).toBeInTheDocument();
});
