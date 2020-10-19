import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const headerText = getByText(/Welcome to Product Showcase/i);
  expect(headerText).toBeInTheDocument();
});
