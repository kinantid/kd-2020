import React from "react";
import { Link } from "gatsby"
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";
import ContactOverlay from "../components/ContactOverlay";
import Menu from "../images/Menu.svg";

const HeaderContainer = styled("div")`
    max-width: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    z-index:1;
    background: ${colors.black};
    height: 112px;
    @media(max-width: ${dimensions.maxwidthTablet}px) {
        height: 80px;
    }
    img, button {
        padding-top: 0;
    }
`

const HeaderContent = styled("div")`
    display: flex;
    justify-content: space-between;
    padding-left: ${dimensions.paddingHorizontalDesktop}em;
    padding-right: ${dimensions.paddingHorizontalDesktop}em;
    padding-top: 30px;
    margin: 0 auto;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        padding-left: ${dimensions.paddingHorizontalTablet}em;
        padding-right: ${dimensions.paddingHorizontalTablet}em;
        padding-top: 20px;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding-left: ${dimensions.paddingHorizontalMobile}em;
        padding-right: ${dimensions.paddingHorizontalMobile}em;
        padding-top: 20px;
    }
    align-items: center;
`;

const HeaderLinks = styled("div")`
    text-transform: uppercase;
    height: 100%;
    @media(max-width: ${dimensions.maxwidthTablet}px) {
        display: flex;
    }
    a {
        padding-left: 3em;
        background: ${colors.black};
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        color: ${colors.grey1};
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            display: none;
        }
        &:hover {
            color: ${colors.onHoverOrange};
            text-decoration: underline;
        }

        &.Link--is-active {
            color: ${colors.orange};
            text-decoration: underline;
        }
    }
    img {
        cursor: pointer;
        display: none;
        margin-bottom: 10px;
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            display: initial;
        }
    }
`


function Header() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <HeaderContainer>
                <HeaderContent>
                    <Link to="/">
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
                        <img width="40px" height="40px" src={Menu} onClick={() => { }} />
                    </HeaderLinks>
                </HeaderContent>
            </HeaderContainer>
            {open ?
                <ContactOverlay setOpen={setOpen} />
                : <> </>}
        </>
    )
}

export default Header;