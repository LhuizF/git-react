import React from 'react';

import { HeaderContainer } from './styled';

export default function MainHeader(props) {
    return (
        <HeaderContainer>
            <div className="nav-container">{props.children}</div>
            <div className="avatar-container">
                <img src={props.user.avatar_url} alt="avatar" />
            </div>
        </HeaderContainer>
    );
}
