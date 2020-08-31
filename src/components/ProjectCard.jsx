import React from "react";
import { Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import PropTypes from "prop-types";

const ProjectCardContainer = styled(Link)`
    display: flex;
    width: 100%;
    transition: all 150ms ease-in-out;
    text-decoration: none;
    color: currentColor;

    @media(max-width:${dimensions.maxwidthMobile}px) {
        margin-bottom: 2em;
        flex-direction: column;
    }

    &:hover {
        .ProjectCardAction {
            color: ${colors.blue500};
            transition: all 150ms ease-in-out;

            span {
                transform: translateX(0px);
                opacity: 1;
                transition: transform 150ms ease-in-out;
            }
        }

        .ProjectCardContent::before {
            opacity: 0.02;
            transition: all 150ms ease-in-out;
        }

        .ProjectCardImageContainer::before {
            opacity: 0.2;
            transition: all 150ms ease-in-out;
        }
    }
`

const ProjectCardContent = styled("div")`
    padding: 4em 3em 2.25em 3em;
    color: ${colors.grey1}
    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${colors.blue500};
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }

    @media(max-width:950px) {
        padding: 3.25em 2.5em 2em 2.5em;
    }

    @media(max-width:${dimensions.maxwidthTablet}px) {
        grid-row: 2;
    }
`

const ProjectCardTitle = styled("h3")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
`

const ProjectCardBlurb = styled("p")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 5em;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 2.5em;
    }
`

const ProjectCardAction = styled("p")`
    font-weight: 600;
    padding-top: 14px;
    text-decoration: none;
    color: currentColor;
    transition: all 150ms ease-in-out;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
    }
`

const ProjectCardImageContainer = styled("div")`
    overflow: hidden;
    position: absolute;
    border-radius: 12px;
    z-index:-5;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        padding-top: 3em;
        max-height: 200px;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }

    img {
        max-width: 400px;
        height: 203px;
        width: 100%;
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);

        @media(max-width:${dimensions.maxwidthTablet}px) {
            max-width: 300px;
        }
    }
`

const ProjectCard = ({ category, title, description, thumbnail, uid }) => (
    <ProjectCardContainer to={`/work/${uid}`}>
        <ProjectCardContent className="ProjectCardContent">
            <ProjectCardImageContainer className="ProjectCardImageContainer">
                <img src={thumbnail.url} alt={title[0].text} />
            </ProjectCardImageContainer>
            <div style={{ display: "flex" }}>
                <ProjectCardTitle>
                    {title[0].text}
                </ProjectCardTitle>
            </div>
            <ProjectCardBlurb>
                {RichText.render(description)}
            </ProjectCardBlurb>
            <ProjectCardAction className="ProjectCardAction">

                VIEW CASE STUDY
                <span>&#10140;</span> </ProjectCardAction>
        </ProjectCardContent>
    </ProjectCardContainer>
)

export default ProjectCard;

ProjectCard.propTypes = {
    category: PropTypes.array.isRequired,
    thumbnail: PropTypes.object.isRequired,
    title: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
    uid: PropTypes.string.isRequired
}