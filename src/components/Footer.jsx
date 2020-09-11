import React from "react";
import styled from "@emotion/styled";
import colors from "styles/colors";
import email from "../images/Email Logo.svg";
import linkedin from "../images/Linkedin Logo.svg";
import medium from "../images/Medium Logo.svg";
import twitter from "../images/Twitter Logo.svg";
import dimensions from "styles/dimensions";
import { graphql, useStaticQuery } from "gatsby";

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
    font-size: 20px;
    line-height: 28px;
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
    width: 216px;
    margin-top: 1.7em;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        margin-bottom: 3em;
    }

`

const SocialImage = styled("img")`
&:hover {
    color: ${colors.onHoverOrange};
}
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
                    <SocialImage width="24px" height="24px" alt="Email logo" src={email}>
                    </SocialImage>
                </a>
                <a href="https://www.linkedin.com/in/kinantid/">
                    <SocialImage width="24px" height="24px" alt="Linkedin logo" src={linkedin}>
                    </SocialImage>
                </a>
                <a href="https://twitter.com/desyanandini">
                    <SocialImage width="24px" height="24px" alt="Twitter logo" src={twitter}>
                    </SocialImage>
                </a>
                <a href="https://medium.com/@kinantid">
                    <SocialImage width="24px" height="24px" alt="Medium logo" src={medium}>
                    </SocialImage>
                </a>
            </SocialLinksContainer>
        </FooterContainer >
    )
}