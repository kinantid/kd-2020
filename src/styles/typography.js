import css from '@emotion/css';
import './fonts.scss';
import dimensions from "styles/dimensions";

const typeStyles = css`
    h1 {
        font-size: 40px;
        line-height: 1.45;
        font-family: Metropolis Regular;

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
        font-family: Metropolis Regular;

    }

    h3 {
        font-family: Metropolis Regular;
        line-height: 1.2;
        font-size: 24px;
    }

    h4 {
        font-family: Metropolis Regular;
        margin-bottom: 1.45rem;
        font-weight: 500;
        font-size: 16px;
    }

    h6 {
        font-size: 0.9em;
        font-weight: 500;
        margin: 0;
    }

    p {
        font-family: HKGrotesk Light;
        line-height: 1.9;
    }

    a {
        &:hover {
            cursor: pointer;
        }
    }
`

export default typeStyles;