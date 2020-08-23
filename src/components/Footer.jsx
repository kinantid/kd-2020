import React from "react";
import styled from "@emotion/styled";
import colors from "styles/colors";
import email from "../images/Email Logo.svg";
import linkedin from "../images/Linkedin Logo.svg";
import medium from "../images/Medium Logo.svg";
import twitter from "../images/Twitter Logo.svg";
import dimensions from "styles/dimensions";

const FooterContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 40px;
    margin-top: 1.5em;
    font-size: 12px;
    font-family: HK Grotesk Medium;
    display: flex;
    justify-content: space-between;

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`
const FooterAuthor = styled("p")`
    line-height: 1.5;
    margin: 0;
    color: ${colors.menuGrey};
`
const FooterDeveloper = styled("a")`
    color: ${colors.primaryBlue};
    padding-left: 3px;
`

const TextContainer = styled("div")`
    display: flex;
    margin-top: 1.5em;
`

const SocialLinksContainer = styled("div")`
    display: flex;
    justify-content: space-between;
    width: 216px;
    margin-top: 1.5em;
`

const SocialImage = styled("img")`
`

const Footer = () => (
    <FooterContainer>
        <TextContainer>
            <FooterAuthor>
                Designed myself and built by
        </FooterAuthor>
            {" "}
            <FooterDeveloper to='https://www.linkedin.com/in/sophia-ritchie/'>
                Sophia Ritchie
        </FooterDeveloper>
            {" "}
            <FooterAuthor>
                <span role="img" aria-label="black heart emoji and seedling emoji">
                    🖤🌱
            </span>
            </FooterAuthor>
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

export default Footer;
