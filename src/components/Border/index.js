import React from 'react';
import { BorderContainer } from './styled';

export default function Border(props) {
    return (
        <BorderContainer>
            <span className="yellow-borde"> </span>
            {props.children}
        </BorderContainer>
    );
}
