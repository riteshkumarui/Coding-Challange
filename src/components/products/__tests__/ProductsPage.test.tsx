import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProductsPage } from './../ProductsPage';

test('renders Layout Component', () => {
    const imageProps = {
        size: '',
        meta: '',
        alt: '',
        rel: '',
        width: 100,
        href: '/',
        height: 100
    }
    const props = {
        items: [{
        id: '123',
        name: '',
        links: {
            www: ''
        },
        priceRange: {
            selling: {
                high: 100,
                low: 50
            }
        },
        price: {
            regular: 123,
            selling: 124
        },
        thumbnail: {
            size: '',
            meta: '',
            alt: '',
            rel: '',
            width: 100,
            href: '/',
            height: 100
        },
        hero: {
            size: '',
            meta: '',
            alt: '',
            rel: '',
            width: 100,
            href: '/',
            height: 100
        },
        images: [],
        swatches: [],
        messages: [],
        flags: [{
            bopisSuppress: true,
            rank: 1,
            id: '123'
        }],
        reviews: {
            recommendationCount: 1,
            likelihood: 12,
            reviewCount: 1,
            averageRating: 2,
            id: '1',
            type: ''
        },
        }],
        selectedProduct: jest.fn()
    };
  const { container } = render(<ProductsPage {...props} />);
    const product = container.querySelector('.product');
    const productName = container.querySelector('.product-name');
    const productTitle = container.querySelector('.product-title');
    expect(product).toBeTruthy();
    expect(productName).toBeTruthy();
    expect(productTitle).toBeTruthy();
});
