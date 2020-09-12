import React from "react";
import styled from "@emotion/styled";
import Logo from "components/_ui/Logo";
import { Link } from "gatsby";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import { graphql, useStaticQuery } from "gatsby";
import Close from "../images/Close.svg";
import Twitter from "../components/_ui/Twitter";
import Linkedin from "../components/_ui/LinkedIn";


const HeaderContainer = styled("div")`
padding-top: 30px;
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

const ContactOverlayContainer = styled("div")`
    height: 100%;
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
const PageContent = styled("div")`
padding-left: 6em;
`
export default function ContactOverlay({ setOpen }) {
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
        <ContactOverlayContainer>
            <LayoutContainer>
                <HeaderContainer>
                    <HeaderContent>
                        <Link to="/" onClick={() => { setOpen(false) }}>
                            <Logo />
                        </Link>
                        <img width="40px" height="40px" src={Close} onClick={() => { setOpen(false) }} />
                    </HeaderContent>
                </HeaderContainer>
                <PageContent>
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
                </PageContent>
            </LayoutContainer>
        </ContactOverlayContainer>
    )
}