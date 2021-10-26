import React from 'react';
import { useHistory } from 'react-router';
import { HiArrowLeft } from 'react-icons/hi';

import { HeaderContainer } from './styled';

export default function Header({ data, title }) {
    const history = useHistory();
    return (
        <HeaderContainer>
            <HiArrowLeft
                className="back-arrow"
                onClick={() => history.goBack()}
            />

            <h3>
                {data.length} {title}
            </h3>
        </HeaderContainer>
    );
}
