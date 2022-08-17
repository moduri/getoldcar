import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #e4e4e4;
        button:hover {
            background-color: #f7f8ff;
            border: 1px solid #f7f8ff;
        }
        button {
            background-color: #eee;
            cursor: pointer;
            outline: none;
            box-shadow: 1px 2px 0 rgb(0,0,0,0.5);
        }
        button:active {
            box-shadow: 1px 1px 0 rgb(0,0,0,0.5);
            position: relative;
            top:2px;
        }

    };
`;

export default GlobalStyle;
