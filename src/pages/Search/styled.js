import styled from 'styled-components';
import Colors from '../../style/Colors';

export const MainDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .search-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 90%;
        max-width: 340px;
    }
    img {
        width: 98px;
        margin: 20px;
    }

    .input-container {
        position: relative;
        width: 100%;
        input,
        button {
            margin: 10px 0;
            width: 100%;
            height: 56px;
            border-radius: 12px;
            font-size: 24px;
        }

        input {
            box-sizing: border-box;
            padding: 10px;
        }

        button {
            background-color: ${Colors.yellow};
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;

            svg {
                margin-left: 4px;
            }
        }

        span {
            color: ${Colors.error};
            position: absolute;
            bottom: 104px;
            right: 20px;
        }
    }
`;
