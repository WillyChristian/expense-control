import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-size: 16px;
        color: ${(props) => props.theme.colors.black};
        font-weight: 400;
        background:  ${(props) => props.theme.colors.white};
        font-family: sans-serif;
    }
`;
