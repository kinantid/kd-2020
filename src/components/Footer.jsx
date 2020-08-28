import React from "react";
import styled from "@emotion/styled";
import colors from "styles/colors";
import email from "../images/Email Logo.svg";
import linkedin from "../images/Linkedin Logo.svg";
import medium from "../images/Medium Logo.svg";
import twitter from "../images/Twitter Logo.svg";
import dimensions from "styles/dimensions";
import { graphql, useStaticQuery } from "gatsby";
import { RichText } from "prismic-reactjs";

const FooterContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 40px;
    margin-top: 1.5em;
    display: flex;
    justify-content: space-between;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        flex-direction: column-reverse;
        align-items: center;
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

    @media(max-width: ${dimensions.maxWidthFooter}px) {
        width: 616px;
    }
    
`

const SocialLinksContainer = styled("div")`
    display: flex;
    justify-content: space-between;
    width: 216px;
    margin-top: 1.7em;
`

const SocialImage = styled("img")`
`

export default function Footer() {
    const data = useStaticQuery(graphql`
    {
        prismic {
            allHeader_and_footers {
                edges {
                    node {
                        footer_text
                    }
                }
            }
        }
    }
`)
    return (
        <FooterContainer>
            <TextContainer>
                {RichText.render(data.prismic.allHeader_and_footers.edges.slice(0, 1).pop().node.footer_text)}
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
                <a href="medium.com/@kinantid">
                    <SocialImage width="24px" height="24px" alt="Medium logo" src={medium}>
                    </SocialImage>
                </a>
            </SocialLinksContainer>
        </FooterContainer >
    )
}