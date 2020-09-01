import React from "react";
import { Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import PropTypes from "prop-types";

const ProjectCardContainer = styled(Link)`
    transition: all 150ms ease-in-out;
    text-decoration: none;
    border-radius: 4px;
    display: inline-block;
    position: relative;
    margin-right: 24px;
    overflow: hidden;
    transition: visibility 0s, opacity 0.5s linear;

    &:hover {

        .ProjectCardAction {
            visibility: visible;
            opacity: 1;
        }

        .ProjectCardImageContainer {
            transform: scale(1.15);
            transition: all 0.25s ease-in-out;
        }

        .ProjectCardImageContainer::before {
            background-color: #191919;
            opacity: 0.8;
        }
    }
`

const ProjectCardContent = styled("div")`
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 32px;
    width: 256px;
`

const ProjectCardTitle = styled("h3")`
    margin-bottom: 0.5em;
`

const ProjectCardBlurb = styled("p")`
    margin-bottom: 7em;
    margin-block-start: 0;
    margin-right:auto;
    font-size: 16px;
    line-height: 24px;
    width:inherit;
    white-space: pre-wrap;
    color: ${colors.grey1};
`

const ProjectCardAction = styled("p")`
    font-weight: 600;
    text-decoration: none;
    color: ${colors.grey1};
    transition: all 150ms ease-in-out;
    visibility: hidden;
    opacity: 0;

    span {
        margin-left: 0.75em;
        display: inline-block;
        color: ${colors.orange};
    }
`

const ProjectCardImageContainer = styled("div")`
    z-index:-5;
    background-color: #191919;
    opacity: 0.5;
   
    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
    }

    img {
        border-radius: 4px;
        max-width: 557px;
        min-height: 279px;
        min-width: 256px;
        width: 100%;
    }
`

const ProjectCard = ({ category, title, description, thumbnail, uid }) => (
    <ProjectCardContainer to={`/work/${uid}`}>
        <ProjectCardImageContainer className="ProjectCardImageContainer">
            <img src={thumbnail.url} alt={title[0].text} />
        </ProjectCardImageContainer>
        <ProjectCardContent className="ProjectCardContent">
                <ProjectCardTitle>
                    {title[0].text}
                </ProjectCardTitle>
            <ProjectCardBlurb>
                {RichText.asText(description)}
            </ProjectCardBlurb>
            <ProjectCardAction className="ProjectCardAction">

                VIEW CASE STUDY
                <span>{'>'}</span> </ProjectCardAction>
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