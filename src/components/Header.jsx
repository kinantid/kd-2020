import React from "react";
import { Link } from "gatsby"
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";
import ContactOverlay from "../components/ContactOverlay";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const HeaderContainer = styled("div")`
    max-width: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    background: ${colors.black};
    height: 112px;
    .mobile-menu-open {
        visibility: visible;
        -webkit-transition: height 0.3s ease-in-out;
        transition: height 0.3s ease-in-out;
        z-index: 0;
        height: 134px;
        a {
            transition: opacity 0.6s 0.3s ease-in;
            visibility: visible;
            opacity: 1;
            padding-bottom: 1.5em;
        }
    }
        }

        button {
            visibility: hidden;
        }

        @media(max-width: ${dimensions.maxwidthTablet}px) {
            height: 80px;
            button {
                visibility: visible;
            }
        }  
`

const HeaderContent = styled("div")`

    display: flex;
    justify-content: space-between;
    padding-left: ${dimensions.paddingHorizontalDesktop}em;
    padding-right: ${dimensions.paddingHorizontalDesktop}em;
    padding-top: 30px;
    margin: 0 auto;
    z-index: 1000;
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
        &:active {
            outline: 0;
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


const MobileDropdownMenu = styled("div")`

    padding-left: ${dimensions.paddingHorizontalMobile + 1}em;
    display:flex;
    -webkit-transition: height 0.3s ease-in-out;
    transition: height 0.3s ease-in-out;
    text-transform: uppercase;
    box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.36);
    border-radius: 0px 0px 4px 4px;
    height: 0px;
    background: ${colors.black};
    z-index: -1;
    flex-direction: column;
    justify-content: space-between;
    a {
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        color: ${colors.grey1};
        text-decoration: none;
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        opacity: 0;
        &:hover {
            color: ${colors.onHoverOrange};
            text-decoration: underline;
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
        if (isMobileMenuOpen) {
            if (currPos.y < 0 && currPos.y > -550) {
                setSection('projects');
            } else if (currPos.y < -550 && currPos.y > -1538) {
                setSection('about');
            }
            else if (currPos.y < -1538 && currPos.y > -3000) {
                setSection('ideas');
            }
        } else {
            if (currPos.y < 0 && currPos.y > -550) {
                setSection('projects');
            } else if (currPos.y < -550 && currPos.y > -1238) {
                setSection('about');
            }
            else if (currPos.y < -1238 && currPos.y > -3000) {
                setSection('ideas');
            }
        }

    })

    return (
        <>
            <HeaderContainer>
                <HeaderContent>
                    <Link to="/" onClick={() => {
                        setOpen(false);
                        setIsMobileMenuOpen(false);
                    }}>
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
                        <a href="/"
                            onClick={() => { setOpen(true) }}
                            activeClassName="Link--is-active"
                        >
                            Contact
                    </a>
                        <button className={isMobileMenuOpen ? "hamburger hamburger--squeeze is-active" : "hamburger hamburger--squeeze"}
                            type="button" onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen) }}
                            aria-label="Menu" aria-controls="navigation">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </HeaderLinks>
                </HeaderContent>
                <MobileDropdownMenu className={isMobileMenuOpen ? 'mobile-menu-open' : ''}>
                    <div onClick={() => { setIsMobileMenuOpen(false) }}>
                        <AnchorLink
                            className={section === 'projects' ? "active" : null}
                            to="/#projects">
                            Projects
                            </AnchorLink>
                    </div>
                    <div onClick={() => { setIsMobileMenuOpen(false) }}>
                        <AnchorLink
                            className={section === 'about' ? "active" : null}
                            to="/#about">
                            About
                            </AnchorLink>
                    </div>
                    <div onClick={() => { setIsMobileMenuOpen(false) }}>
                        <AnchorLink
                            className={section === 'ideas' ? "active" : null}
                            to="/#ideas">
                            Ideas
                        </AnchorLink>
                    </div>
                    <div>
                        <a
                            href="/"
                            onClick={() => { setOpen(true); setIsMobileMenuOpen(false); }}
                            activeClassName="Link--is-active"
                        >
                            Contact
                </a>
                    </div>
                </MobileDropdownMenu>
            </HeaderContainer>
            <ContactOverlay setOpen={setOpen} open={open} />
        </>
    )
}

export default Header;