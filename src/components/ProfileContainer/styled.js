import styled from 'styled-components';
import Colors from '../../style/Colors';

export const Container = styled.section`
    margin-top: 110px;
    width: 100%;

    h3 {
        font-size: 26px;
    }

    .user-info {
        margin-top: 40px;
        background-color: #5252525d;
        padding: 12px;
        display: flex;
        justify-content: space-around;

        li {
            text-align: center;
        }

        .user-info-number {
            font-weight: bold;
            font-size: 36px;
        }
    }

    .user-bio-text {
        margin-top: 14px;
    }
`;
