import css from '@emotion/css';
import './fonts.scss';
import dimensions from "styles/dimensions";
import colors from "styles/colors";

const typeStyles = css`
    h1 {
        font-size: 64px;
        line-height: 1.25;
        color: white;
        font-family: Inter;

        @media(max-width:${dimensions.maxwidthTablet}px) {
            font-size: 2.25em;
        }

        @media(max-width:${dimensions.maxwidthMobile}px) {
            font-size: 2em;
        }
    }

    h2 {
        margin-bottom: 2rem;
        font-size: 32px;
        line-height: 1.1;
        font-family: Inter;
        color: white;

    }

    h3 {
        font-family: Inter;
        line-height: 32px;
        font-size: 24px;
        font-style: normal;
        font-weight: normal;
        margin-block-start: 0;
        margin-block-end: 0;
        color: ${colors.grey1};

        @media(max-width:${dimensions.maxwidthMobile}px) {
            font-size: 20px;
            line-height: 28px;
        }

    }

    h4 {
        font-family: Inter;
        margin-bottom: 1.45rem;
        font-weight: 500;
        font-size: 16px;
        color: ${colors.grey1};
    }

    h6 {
        font-size: 0.9em;
        font-weight: 500;
        margin: 0;
    }

    p {
        font-family: Inter;
        font-style:  normal;
        font-weight: 400;
    }

    a {
        color: ${colors.orange};
        text-decoration: none;
        &:hover {
            cursor: pointer;
            color: ${colors.onHoverOrange};

        }
    }
`

export default typeStyles;