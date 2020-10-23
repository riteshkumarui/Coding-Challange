import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Carousal } from './../Carousal';

test('renders learn react link', () => {
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
        selectedItem: {
            id: '123',
            name: 'Ceramic Taper Holder',
            links: {
                www: '/link'
            },
            priceRange: {
                selling: {
                    high: 123,
                    low: 234
                }
            },
            price: { 
                regular: 123,
                selling: 234
            },
            thumbnail: imageProps,
            hero: imageProps,
            images: [],
            swatches: [],
            messages:  [],
            flags:  [],
            reviews:  {
                recommendationCount: 1,
                likelihood: 12,
                reviewCount: 1,
                averageRating: 2,
                id: '1',
                type: ''
            },
        }
    };
  const { container } = render(<Carousal {...props} />);
    const prevBtn = container.querySelectorAll('.previous-next-btns span')[0];
    fireEvent.click(prevBtn);
    const nextBtn = container.querySelectorAll('.previous-next-btns span')[1];
    fireEvent.click(nextBtn);
    const wrapper = container.querySelector('.carousal-wrapper');
    expect(wrapper).toBeInTheDocument();
});
