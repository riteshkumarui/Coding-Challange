import React from 'react';
import './Overlay.css';

type Props = {
    isVisible: boolean
    onClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, isVisible: boolean) => void
}
export const Overlay: React.FC<Props> = (props) => {
    return  props.isVisible ? <div className="overlay"><div className="overlay-content">
	        <div className="overlay-close" onClick={e => props.onClose(e, !props.isVisible)}>X</div>
	        {props.children}
            </div></div> : null;
}