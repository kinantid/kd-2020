import React from "react";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import { graphql, useStaticQuery } from "gatsby";
import Email from "../components/_ui/Email";
import Linkedin from "../components/_ui/LinkedIn";
import Twitter from "../components/_ui/Twitter";
import Medium from "../components/_ui/Medium";

const FooterContainer = styled("div")`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3em;
    padding-left: ${dimensions.paddingHorizontalDesktop}em;
    padding-right: ${dimensions.paddingHorizontalDesktop}em;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        padding-left: ${dimensions.paddingHorizontalTablet}em;
        padding-right: ${dimensions.paddingHorizontalTablet}em;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding-left: ${dimensions.paddingHorizontalMobile}em;
        padding-right: ${dimensions.paddingHorizontalMobile}em;
    }
`

const TextContainer = styled("div")`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.grey3};
    a {
        text-decoration: underline;

        color: ${colors.orange};

        &:hover {
            color: ${colors.onHoverOrange};
        }
    }

    p {
        margin: 0 0 0 0;
    }

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        text-align: center;
    }
    
`

const SocialLinksContainer = styled("div")`
    display: flex;
    justify-content: space-between;
    margin-top: 1.7em;
    width: 580px;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        margin-bottom: 3em;
        width: 264px;
    }

`

const SocialImage = styled("svg")`
    fill: ${colors.onHoverOrange};


`

export default function Footer() {
    const data = useStaticQuery(graphql`
    {
        allPrismicHeaderAndFooter {
                edges {
                    node {
                        id
                        data {
                            footer_text {
                                html
                            }
                        }
                    }
                }
            }
        
    }
`)
    return (
        <FooterContainer>
            <TextContainer dangerouslySetInnerHTML={{
                __html: data.allPrismicHeaderAndFooter.edges.slice(0, 1).pop().node.data.footer_text.html
            }}>
            </TextContainer>
            <SocialLinksContainer>
                <a href="mailto:kinanti.desy@gmail.com">
                    <Email />
                </a>
                <a href="https://twitter.com/desyanandini">
                    <Twitter/>
                </a>
                <a href="https://www.linkedin.com/in/kinantid/">
                    <Linkedin />
                </a>
                <a href="https://medium.com/@kinantid">
                    <Medium/>
                </a>
            </SocialLinksContainer>
        </FooterContainer >
    )
}