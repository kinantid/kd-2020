import React from "react";
import { Link } from "gatsby"
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";
import ContactOverlay from "../components/ContactOverlay";
import Menu from "../images/Menu.svg";

const HeaderContainer = styled("div")`
    padding-top: 21.4px;
    padding-bottom: 3em;
    max-width: 100%;

    img, button {
        padding-top: 0;
    }
`

const HeaderContent = styled("div")`
    display: flex;
    justify-content: space-between;
`;

const HeaderLinks = styled("div")`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 2em;
    justify-content: flex-end;
    width: 100%;
    max-width: 100%;
    text-transform: uppercase;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        display: flex;
    }
    a {
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
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            visibility: hidden;
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
        padding-top: 0;
        cursor: pointer;
        visibility: hidden;
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            visibility: visible;
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