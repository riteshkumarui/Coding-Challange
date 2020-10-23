import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Layout } from './../Layout';

test('renders Layout Component', () => {
  const { container, getByText } = render(<Layout />);
    const wrapper = container.querySelector('.layout');
    expect(wrapper).toBeTruthy();
});
