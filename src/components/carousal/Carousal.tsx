import React, { useEffect, useState } from 'react';
import { Product } from '../products/types';
import './Carousal.css';

type Props = {
    items: Array<Product>,
    selectedItem: Product | undefined,
}

export const Carousal: React.FC<Props> = (props) => {

    const [count, setCount] = useState(1);
    const [anim, setAnim] = useState(false);
    const [currentImage, setCurrentImage] = useState({alt: "", href: "", width: 0, height: 0});

    useEffect(() => {
        const index = props.items.findIndex(item => item.id === props.selectedItem?.id) + 1;
        setCount(index);
        console.log(index);
        console.log(props.items);
        const filterItem = props.items[index - 1];
        const {thumbnail: {
            alt,
            href,
            width,
            height
        }} = filterItem
        console.log(href);
        setCurrentImage({alt, href, width, height});
    },[])

    useEffect(() => {
        const filterItem = props.items[count - 1];
        const {thumbnail: {
            alt,
            href,
            width,
            height
        }} = filterItem
        console.log(href);
        setCurrentImage({alt, href, width, height});
    },[count, props.items])

    const handlePrev = () => {
        setCount(count - 1);
        setAnim(true);
        if ( count === 1) {
            setCount(props.items.length);
        }
        console.log(count);
    }

    const handleNext = () => {
        setCount(count + 1);
        setAnim(true);
        if ( count === props.items.length) {
            setCount(1);
        }
        console.log(count);
    }

    const gotoItem = (_:React.MouseEvent<HTMLSpanElement, MouseEvent>, index: number) => {
        setCount(index + 1);
    }

    return <div className='carousal-wrapper'>
        <div className='photos'>
            <img src={currentImage.href} alt={currentImage.alt} width={currentImage.width} height={currentImage.height}/>
        </div>
        <div className='previous-next-btns'>
            <span onClick={handlePrev}>{'<'}</span>
            <span onClick={handleNext}>{'>'}</span>
        </div>
        <div className='round-selctor'>
            {props.items.map((item, index) => (<span key={item.id} className={index === (count - 1) ? 'active' : ''} onClick={(e) => gotoItem(e, index)}></span>))}
        </div>
    </div>
}