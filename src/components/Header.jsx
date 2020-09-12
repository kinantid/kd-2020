import React from "react";
import { Link } from "gatsby"
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";
import ContactOverlay from "../components/ContactOverlay";
import Menu from "../images/Menu.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Close from "../images/Close.svg";

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

const MobileHeaderLinks = styled("div")`
padding-bottom: 2em;
padding-top: 2em;
padding-left: ${dimensions.paddingHorizontalMobile + 1}em;

box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.36);
border-radius: 0px 0px 4px 4px;
height: 184px;

    text-transform: uppercase;
    background: ${colors.black};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        color: ${colors.grey1};
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        &:hover {
            color: ${colors.onHoverOrange};
            text-decoration: underline;
        }

        html:not([data-scroll='0']) {
            color: ${colors.orange};
          }
    }
    .active {
        color: ${colors.orange};
        text-decoration: underline;
    }
`

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
        line-height: 17px;
        font-weight: 600;
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            display: none;
        }
        &:hover {
            color: ${colors.onHoverOrange};
            text-decoration: underline;
        }

        html:not([data-scroll='0']) {
            color: ${colors.orange};
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
    .active {
        color: ${colors.orange};
        text-decoration: underline;
    }
`


function Header(props) {
    const [open, setOpen] = React.useState(false);
    const [section, setSection] = React.useState('projects');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    useScrollPosition(({ prevPos, currPos }) => {
        if (props.project) {
            return;
        }
        console.log(currPos.y)
        if (currPos.y < 0 && currPos.y > -550) {
            setSection('projects');
        } else if (currPos.y < -550 && currPos.y > -1238) {
            setSection('about');
        }
        else if (currPos.y < -1238 && currPos.y > -3000) {
            setSection('ideas');
        }
    })

    return (
        <>
            <HeaderContainer>
                <HeaderContent>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <HeaderLinks>
                        <AnchorLink
                            onClick={() => setSection('projects')}
                            className={section === 'projects' ? "active" : null}
                            to="/#projects">
                            Projects
                         </AnchorLink>
                        <AnchorLink
                            onClick={() => setSection('about')}
                            className={section === 'about' ? "active" : null}
                            to="/#about">
                            About
                         </AnchorLink>
                        <AnchorLink
                            onClick={() => setSection('ideas')}
                            className={section === 'ideas' ? "active" : null}
                            to="/#ideas">
                            Ideas
                         </AnchorLink>
                        <a
                            onClick={() => { setOpen(true) }}
                            activeClassName="Link--is-active"
                        >
                            Contact
                    </a>
                        <img width="40px" height="40px" src={isMobileMenuOpen ? Close : Menu} onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen) }} />
                    </HeaderLinks>
                </HeaderContent>
                {isMobileMenuOpen ?
                    <MobileHeaderLinks>
                        <AnchorLink
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={section === 'projects' ? "active" : null}
                            to="/#projects">
                            Projects
                     </AnchorLink>
                        <AnchorLink
                            onClick={() => { setSection('about'); setIsMobileMenuOpen(false) }}
                            className={section === 'about' ? "active" : null}
                            to="/#about">
                            About
                     </AnchorLink>
                        <AnchorLink
                            onClick={() => { setSection('ideas'); setIsMobileMenuOpen(false) }}
                            className={section === 'ideas' ? "active" : null}
                            to="/#ideas">
                            Ideas
                     </AnchorLink>
                        <a
                            onClick={() => { setOpen(true) }}
                            activeClassName="Link--is-active"
                        >
                            Contact
                </a>
                    </MobileHeaderLinks> : <></>}

            </HeaderContainer>
            {open ?
                <ContactOverlay setOpen={setOpen} />
                : <> </>}
        </>
    )
}

export default Header;