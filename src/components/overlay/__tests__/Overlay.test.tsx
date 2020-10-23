import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Overlay } from './../Overlay';

test('renders Layout Component', () => {
    const props = {
        isVisible: true,
        onClose: jest.fn()
    };
  const { container } = render(<Overlay {...props} />);
    const overlay = container.querySelector('.overlay');
    expect(overlay).toBeTruthy();
});

test('should close overlay-panel', () => {
    const props = {
        isVisible: true,
        onClose: jest.fn()
    };
  const { container } = render(<Overlay {...props} />);
    const overlayClose = container.querySelector('.overlay-close');
    fireEvent.click(overlayClose);
    expect(props.onClose).toHaveBeenCalled();
});

test('should not render overlay-panel', () => {
    const props = {
        isVisible: false,
        onClose: jest.fn()
    };
  const { container } = render(<Overlay {...props} />);
    const overlay = container.querySelector('.overlay');
    expect(overlay).toBeFalsy();
});
