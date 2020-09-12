import css from '@emotion/css';
import './fonts.scss';
import dimensions from "styles/dimensions";

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
        line-height: 1.2;
        font-size: 24px;
        color: white;
    }

    h4 {
        font-family: Inter;
        margin-bottom: 1.45rem;
        font-weight: 500;
        font-size: 16px;
        color: white;
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
        &:hover {
            cursor: pointer;
        }
    }
`

export default typeStyles;