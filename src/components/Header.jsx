import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";

const HeaderContainer = styled("div")`
    padding-top: 21.4px;
    padding-bottom: 3em;
`

const HeaderContent = styled("div")`
    display: flex;
    justify-content: space-between;
`

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
    a {
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

const Header = () => (
    <HeaderContainer>
        <HeaderContent>
            <AnchorLink to="/" style={{ paddingBottom: "20px" }}>
                <Logo />
            </AnchorLink>
            <HeaderLinks>
                <Link
                    activeClassName="Link--is-active"
                    to="/">
                    Projects
                </Link>
                <AnchorLink
                    activeClassName="Link--is-active"
                    to="/#about">
                    About
                </AnchorLink>
                <AnchorLink
                    activeClassName="Link--is-active"
                    to="/#ideas">
                    Ideas
                </AnchorLink>
                <AnchorLink
                    activeClassName="Link--is-active"
                    to="/contact">
                    Contact
                </AnchorLink>
            </HeaderLinks>
        </HeaderContent>
    </HeaderContainer>
)

export default Header;