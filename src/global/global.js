// 글로벌 스타일을 넣기위한 파일(폰트스타일,리셋 등)
import reset from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    //스타일 리셋
    ${reset}

    @font-face {
        font-family: 'SpoqaHanSansNeo-Regular';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    * {
        box-sizing : border-box;
        text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
        line-height: 1.3;
        letter-spacing: -0.5px;
        text-decoration: none;
    }
  
    body {
        font-family: 'SpoqaHanSansNeo-Regular', sans-serif;
    }
`;

export default GlobalStyle;