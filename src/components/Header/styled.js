import styled from 'styled-components';
import Colors from '../../style/Colors';

export const HeaderContainer = styled.div`
    background-color: ${Colors.mainDark};
    height: 68px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .back-arrow {
        position: absolute;
        left: 15px;
        font-size: 22px;
        font-weight: bold;
    }
`;
