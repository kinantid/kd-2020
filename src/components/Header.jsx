import React from "react";
import { Link } from "gatsby"
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";
import ContactOverlay from "../components/ContactOverlay";

const HeaderContainer = styled("div")`
    padding-top: 21.4px;
    padding-bottom: 3em;
    img, button {
        padding-top: 0;
    }
`

const HeaderContent = styled("div")`
    display: flex;
    justify-content: space-between;
`
const LayoutContainer = styled.div`
    max-width: ${dimensions.maxwidthDesktop}px;
    padding-left: ${dimensions.paddingHorizontalDesktop}em;
    padding-right: ${dimensions.paddingHorizontalDesktop}em;
    margin: 0 auto;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        padding-left: ${dimensions.paddingHorizontalTablet}em;
        padding-right: ${dimensions.paddingHorizontalTablet}em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding-left: ${dimensions.paddingHorizontalMobile}em;
        padding-right: ${dimensions.paddingHorizontalMobile}em;
    }

    .Layout__content {
        padding-bottom: 5em;
    }
`;


const HeaderLinks = styled("div")`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 2em;
    justify-content: flex-end;
    width: 100%;
    max-width: 200px;
    text-transform: uppercase;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        grid-gap: 5.5em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-gap: 2.5em;
        padding-top: 0.65em;
    }
    a, button {
        background: ${colors.black};
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        color: ${colors.grey1};
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        height: 100%;
        padding-bottom: 1.25em;
        padding-top: 0.50em;
        display: block;
        position: relative;

        &:hover {
            color: ${colors.onHoverOrange};
            text-decoration: underline;
        }

        &.Link--is-active {
            color: ${colors.orange};
            text-decoration: underline;
        }
    }
`


function Header() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <HeaderContainer>
                <HeaderContent>
                    <Link to="/" style={{ paddingBottom: "20px" }}>
                        <Logo />
                    </Link>
                    <HeaderLinks>
                        <Link
                            activeClassName="Link--is-active"
                            to="/">
                            Projects
                         </Link>
                        <Link
                            activeClassName="Link--is-active"
                            to="/#about">
                            About
                </Link>
                        <Link
                            activeClassName="Link--is-active"
                            to="/#ideas">
                            Ideas
                </Link>
                        <a
                            onClick={() => { setOpen(true) }}
                            activeClassName="Link--is-active"
                        >
                            Contact
                    </a>
                    </HeaderLinks>
                </HeaderContent>
            </HeaderContainer>
            {open ?
                <ContactOverlay setOpen={setOpen}/>
                : <> </>}
        </>
    )
}

export default Header;