import styled from 'styled-components';

export const Nav = styled.nav`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 75px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    border-radius: 10px 10px 0 0;
    box-sizing: border-box;
`;

export const BottomNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${(props) => {
        if (props.className === props.selected) {
            return `color: #000`;
        }
        return 'color:#A5A5A5 ';
    }}
`;
