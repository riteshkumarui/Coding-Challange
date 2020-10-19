import React from 'react';
import { Header } from './Header';
import './Layout.css';

type Props = {
    children?: React.ReactNode;
}
export const Layout: React.FC<Props> = (props) => {
    return <div className='layout'>
        <Header />
        <div className="content">{props.children}</div>
    </div>
}