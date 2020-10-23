import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Header } from './../Header';

test('renders Header Element', () => {
  const { container, getByText } = render(<Header />);
    const wrapper = container.querySelector('.header');
    expect(wrapper).toBeInTheDocument();
    const headerText = getByText(/Welcome to Product Showcase/i);
    expect(headerText).toBeInTheDocument();
});
