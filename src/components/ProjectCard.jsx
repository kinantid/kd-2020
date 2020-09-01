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
    width: 100%;
    height: 100%;
    border-radius: 4px;

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
width: 100%;
border-radius: 4px;

height: 100%;
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
`

const ProjectCardTitle = styled("h3")`
    margin-left: 20px;
    margin-bottom: 0;
`

const ProjectCardBlurb = styled("div")`
    margin-bottom: 5em;
    margin-block-start: 0;
    margin-left: 20px;
    font-size: 16px;
    line-height: 24px;
    width: 256px;
    color: ${colors.grey1};
`

const ProjectCardAction = styled("p")`
    font-weight: 600;
    margin-left: 20px;
    text-decoration: none;
    color: ${colors.grey1};
    transition: all 150ms ease-in-out;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        color: ${colors.orange};
        transition: transform 400ms ease-in-out;
    }
`

const ProjectCardImageContainer = styled("div")`
    overflow: hidden;
    position: absolute;
    z-index:-5;
    background-color: #191919;
    opacity: 0.5;
   
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
        border-radius: 4px;
        max-width: 532px;
        width: 100%;
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
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