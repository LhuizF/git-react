import styled from 'styled-components';
import Colors from '../../style/Colors';

export const HeaderContainer = styled.div`
    background-color: ${Colors.mainDark};
    padding: 23px 15px;
    height: 106px;

    .avatar-container {
        display: flex;
        justify-content: center;

        img {
            width: 134px;
            border-radius: 100%;
            border: 2px solid #fff;
            margin-top: 30px;
        }
    }

    .nav-container {
        display: flex;
        justify-content: space-between;
        font-size: 20px;

        h3 {
            font-size: 20px;
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 100;
            font-size: 16px;

            svg {
                margin-left: 8px;
            }
        }
    }
`;
