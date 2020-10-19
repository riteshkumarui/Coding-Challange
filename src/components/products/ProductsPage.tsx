import React from 'react';
import { Product } from './types';
import "./ProductsPage.css";

type Props = {
    items: Array<Product>
    selectedProduct: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, item: Product) => void
}
export const ProductsPage: React.FC<Props> = (props) => {
    return <div className='product-wrapper'>
        {props.items.map((item) => {
            const {
            alt,
            width,
            href,
            height} = item.hero;
            return (<div key={item.id} className='product' onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => props.selectedProduct(event, item)}>
                <div className="product-name"><span className="product-title">{item.name.toUpperCase()}</span></div>
                <img src={href} height={height} width={width} alt={alt} />
                {item.price && <div className="product-price"><span className="product-price-regular">{`$${item.price?.regular}`}</span></div>}
            </div>)
        })}
    </div> 
}