import styled from 'styled-components';
import Colors from '../../style/Colors';

export const BorderContainer = styled.div`
    display: flex;

    .yellow-borde {
        border: 5px solid ${Colors.yellow};
        height: 26px;
        border-radius: 0 10px 10px 0;
        margin-right: 16px;
    }
`;
