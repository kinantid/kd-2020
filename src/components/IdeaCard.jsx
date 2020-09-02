import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const IdeaCardContainer = styled('a')`
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

const IdeaCardContent = styled("div")`
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 32px;
    width: 256px;
`

const IdeaCardTitle = styled("h3")`
    margin-bottom: 0.5em;
    white-space: pre-wrap;

`

const IdeaCardImageContainer = styled("div")`
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

const IdeaCard = ({ title, thumbnail, uid }) => (
    <IdeaCardContainer href={uid.url}>
        <IdeaCardImageContainer className="ProjectCardImageContainer">
            <img src={thumbnail.url} alt={title[0].text} />
        </IdeaCardImageContainer>
        <IdeaCardContent className="ProjectCardContent">
            <IdeaCardTitle>
                {title[0].text}
            </IdeaCardTitle>
        </IdeaCardContent>
    </IdeaCardContainer>
)

export default IdeaCard;

IdeaCard.propTypes = {
    thumbnail: PropTypes.object.isRequired,
    title: PropTypes.array.isRequired,
    uid: PropTypes.string.isRequired
}