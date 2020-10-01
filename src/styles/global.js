import css from "@emotion/css";
import colors from 'styles/colors';
import dimensions from 'styles/dimensions';
import './fonts.scss';

const globalStyles = css`
    html,
    body,
    #root {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100%;
    }

    body {
        width: 100%;
        margin: 0 auto;
        font-size: 16px;
        line-height: 1.5;
        background-color: ${colors.black};
        -webkit-font-smoothing: antialiased;

        @media(max-width: ${dimensions.maxwidthMobile}px) {
            font-size: 14px;
        }


        * {
            box-sizing: border-box;
            &:focus-active {  
                outline: 3px solid ${colors.orange};
                border-radius: 4px;
                filter: drop-shadow(0px 4px 12px rgba(255, 97, 29, 0.3));
              }

            &::selection {
                background: ${colors.orange500};
                color: white;
            }
        }
    }

    /*
    A workaround for forcing accessibility wrappers
    to have a 100% height.
    Reach Router issue here: https: //github.com/reach/router/issues/63
    */
    #___gatsby,
    div[role="group"][tabindex] {
        height: 100%;
        min-height: 100% !important;
    }
`

export default globalStyles;