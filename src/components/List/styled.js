import styled from 'styled-components';

export const ListContainer = styled.div`
    .card {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 20px 10px;

        h3 {
            margin-left: 20px;
        }

        img {
            width: 64px;
            border-radius: 100%;
            border: 2px solid #fff;
        }

        .arrow {
            position: absolute;
            right: 15px;
            z-index: -1;
        }
    }
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid #7070705a;
`;
