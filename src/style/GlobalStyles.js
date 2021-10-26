import styled, { createGlobalStyle } from 'styled-components';
import Colors from './Colors';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body{
        font-family: 'Roboto', sans-serif;
        background-color: ${Colors.main};
        color: #fff;
    }

    button,
    input{
        border: none;
        padding: 0;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    li{
        list-style: none;
    }

    p{
        font-weight: lighter;
    }

    h3{
        font-weight: bold;
    }
`;
