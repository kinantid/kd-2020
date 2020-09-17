import React from "react";
import styled from "@emotion/styled";
import Logo from "components/_ui/Logo";
import { Link } from "gatsby";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import { graphql, useStaticQuery } from "gatsby";
import Close from "../components/_ui/Close";
import Twitter from "../components/_ui/Twitter";
import Linkedin from "../components/_ui/LinkedIn";

const MainContainer = styled.div`
.contact-overlay-open {
    visibility: visible;
    height: 100%;
    transition: height 0.6s ease-in-out;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        transition: height 0s;
    }
}

.contact-overlay-closed {
    visibility: hidden;
    height: 0;
}

`

const HeaderContainer = styled("div")`
padding-bottom: 3em;
`

const HeaderContent = styled("div")`
    display: flex;
    justify-content: space-between;
`
const LayoutContainer = styled.div`
    max-width:  ${dimensions.maxwidthDesktop}px;
    margin: 0 auto;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        padding-left: ${dimensions.paddingHorizontalTablet}em;
        padding-right: ${dimensions.paddingHorizontalTablet}em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding-left: ${dimensions.paddingHorizontalMobile}em;
        padding-right: ${dimensions.paddingHorizontalMobile + 0.8}em;
    }
`;

const LayoutContainer2 = styled.div`
    padding-left: ${dimensions.paddingHorizontalDesktop}em;
    padding-right: 8em;
    padding-top: 39px;
    margin: 0 auto;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        padding-left: ${dimensions.paddingHorizontalTablet}em;
        padding-right: ${dimensions.paddingHorizontalTablet}em;
        padding-top: 28px;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding-left: ${dimensions.paddingHorizontalMobile}em;
        padding-right: ${dimensions.paddingHorizontalMobile + 0.8}em;
    }
    .Layout__content {
        padding-bottom: 5em;
    }
`;

const ContactOverlayContainer = styled.div`
    height: 100%;
    visibility: hidden;
    width: 100%;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    background-color: ${colors.black};
    overflow-x: hidden;
    overflow-y: hidden;
`
const Hero = styled("div")`

    padding-top: 2.5em;
    padding-bottom: 3em;
    @media(max-width:${dimensions.maxwidthMobile}px) {
       margin-bottom: 3em;
    }

    h1 {
        margin-bottom: 1em;
        a {
            text-decoration: none;

            color: ${colors.orange};

            &:hover {
                color: ${colors.onHoverOrange};
            }
        }
    }

    h2 {
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        color: ${colors.grey2}
    }
    p {
        margin-block-start: 0;
        font-size: 20px;
        line-height: 28px;
        max-width: 654px;
        color: ${colors.grey1};
        margin-bottom: 1em;

        a {
            text-decoration: underline;
    
            color: ${colors.orange};
    
            &:hover {
                color: ${colors.onHoverOrange};
            }
        }
    }
`
const SocialLinksContainer = styled("div")`
    display: flex;
    justify-content: space-between;
    width: 96px;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        margin-bottom: 3em;
    }

`

export default function ContactOverlay({ open, setOpen }) {
    const data = useStaticQuery(graphql`
    {
        allPrismicContact {
                edges {
                    node {
                        id
                        data {
                            contact_title {
                                html
                            }
                            contact_subheading {
                                html
                            }
                            contact_links {
                                html
                            }
                        }
                    }
                }
            }
        
    }
`)
    return (
        <MainContainer>
            <ContactOverlayContainer className={open ? "contact-overlay-open" : "contact-overlay-closed"}>
                <LayoutContainer2>
                    <HeaderContainer>
                        <HeaderContent>
                            <Link to="/" onClick={() => { setOpen(false); open = false; }}>
                                <Logo />
                            </Link>
                            <div onClick={() => { setOpen(false) }}>
                                <Close />
                            </div>
                        </HeaderContent>
                    </HeaderContainer>
                </LayoutContainer2>
                <LayoutContainer>
                    <Hero>
                        <div dangerouslySetInnerHTML={{
                            __html: data.allPrismicContact.edges.slice(0, 1).pop().node.data.contact_title.html
                        }} />
                        <div dangerouslySetInnerHTML={{
                            __html: data.allPrismicContact.edges.slice(0, 1).pop().node.data.contact_subheading.html
                        }} />
                        <div dangerouslySetInnerHTML={{
                            __html: data.allPrismicContact.edges.slice(0, 1).pop().node.data.contact_links.html
                        }} />
                    </Hero>
                    <SocialLinksContainer>
                        <a href="https://www.linkedin.com/in/kinantid/">
                            <Linkedin></Linkedin>
                        </a>
                        <a href="https://twitter.com/desyanandini">
                            <Twitter></Twitter>

                        </a>
                    </SocialLinksContainer>
                </LayoutContainer>
            </ContactOverlayContainer>
        </MainContainer>
    )
}