import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import PropTypes from "prop-types"
import Chevron from "../images/Chevron.svg"
import { isMobile } from "react-device-detect"

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
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    width: 188px;
  }
`

const ProjectCardTitle = styled("h2")`
  margin-bottom: 0.5em;
  white-space: pre-wrap;
  margin-top: 32px;
`

const ProjectCardBlurb = styled("p")`
  margin-bottom: 7em;
  margin-block-start: 0;
  margin-right: auto;
  font-size: 16px;
  line-height: 24px;
  width: inherit;
  white-space: pre-wrap;
  color: ${colors.grey1};
`

const ProjectCardAction = styled("div")`
  font-weight: 600;
  text-decoration: none;
  color: ${colors.grey1};
  transition: all 150ms ease-in-out;
  visibility: hidden;
  opacity: 0;
  height: 40px;
  display: inline;
  font-size: 14px;
  line-height: 17px;

  img {
    margin-bottom: -6px;
    margin-left: 3px;
  }
`

const ProjectCardImageContainer = styled("div")`
  z-index: -5;
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

const ProjectMobileCardImageContainer = styled("div")`
  z-index: -5;
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
    max-width: 256px;
    min-height: 279px;
    width: 100%;
  }
`

const ProjectCard = ({
  title,
  description,
  thumbnail,
  mobileThumbnail,
  uid,
}) => (
  <ProjectCardContainer to={`/${uid}/`}>
    {isMobile ? (
      <ProjectMobileCardImageContainer>
        <img src={mobileThumbnail.url} alt={title.text} />
      </ProjectMobileCardImageContainer>
    ) : (
      <ProjectCardImageContainer className="ProjectCardImageContainer">
        <img src={thumbnail.url} alt={title.text} />
      </ProjectCardImageContainer>
    )}
    <ProjectCardContent className="ProjectCardContent">
      <ProjectCardTitle>{title.text}</ProjectCardTitle>
      <ProjectCardBlurb>{description.text}</ProjectCardBlurb>
      {isMobile ? (
        <></>
      ) : (
        <ProjectCardAction className="ProjectCardAction">
          VIEW CASE STUDY
          <img width="24px" height="24px" src={Chevron}></img>{" "}
        </ProjectCardAction>
      )}
    </ProjectCardContent>
  </ProjectCardContainer>
)

export default ProjectCard

ProjectCard.propTypes = {
  thumbnail: PropTypes.object.isRequired,
  mobileThumbnail: PropTypes.object.isRequired,
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  uid: PropTypes.string.isRequired,
}
