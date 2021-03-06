import React from 'react';
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "@emotion/styled";
import colors from "styles/colors";
import { graphql } from 'gatsby';
import ProjectLayout from "components/ProjectLayout";
import dimensions from "../styles/dimensions";

const ProjectHeroContainer = styled("div")`
    background: ${colors.grey200};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    padding-top: 1.5em;

    img {
        width: 100%;
    }

`
const ProjectTitleAndDetailsContainer = styled.div`
max-width: ${dimensions.maxwidthDesktop}px;
padding-top: 10em;
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
`

const ProjectTitle = styled("h1")`
    margin-block-start: 0;

        color: white;
        font-family: Inter;
        margin-bottom: 0.2em;
        @media(max-width:${dimensions.maxwidthTablet}px) {
            font-size: 2.25em;
        }

        @media(max-width:${dimensions.maxwidthMobile}px) {
            font-size: 2em;
        }
`

const ProjectBody = styled("div")`
    margin: 0;
    padding: 0 !important;
    max-width: 100% !important;
    background: white;
`


const ProjectText = styled("div")`
max-width: 1000px;
padding-left: ${dimensions.paddingHorizontalTablet}em;
padding-right: ${dimensions.paddingHorizontalTablet}em;
margin: 0 auto;
overflow-x: hidden;

img {
    width: 100%;
}

@media(max-width: ${dimensions.maxwidthMobile}px) {
    img {
        margin-left: -${dimensions.paddingHorizontalMobile}em;
        width: 100vw;
    }
}

@media(max-width: ${dimensions.minWidthDesktop}px) {
    max-width: 736px;
}


@media(max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: ${dimensions.paddingHorizontalTablet}em;
    padding-right: ${dimensions.paddingHorizontalTablet}em;
}

@media(max-width: ${dimensions.maxwidthMobile}px) {
    padding-left: ${dimensions.paddingHorizontalMobile}em;
    padding-right: ${dimensions.paddingHorizontalMobile}em;
}
padding-top: 20px;
padding-bottom: 20px;

h1, h2, h3, h4, h5, h6, p, li, strong {
    color: black;
    ::selection {
        color: black;
        background: ${colors.orange};
      }
    ::-moz-selection {
        color: black;
        background: ${colors.orange};
      }
}

a {
    color: black;
    text-decoration: underline;
}

a:hover {
    color: ${colors.onHoverOrange};
}
`
const ProjectDetails = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    overflow-x: auto;
    overflow-y: hidden;
    min-height: 145px;
    ::-webkit-scrollbar {
        height: 4px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px ${colors.grey4};
    }
    ::-webkit-scrollbar-thumb {
        background: ${colors.orange}; 
        height: 1px;
    }

    div {
    min-width: 160px;

    @media(max-width: ${dimensions.maxwidthMobile}px) {
    padding-right: 24px;
    }
    }

    ul {
        margin-block-start: 0;
        display: inline;
        list-style-type: none;
        padding-inline-start: 0.5em;
        font-size: 0px;
    }
    li {
        font-size: 16px;
        line-height: 24px;
    }

    p, strong {
        margin-block-start: 0;
        margin-block-end: 0;    
        opacity: 0.6;
        font-weight: 600;
    }
`


const Project = ({ project, meta }) => {
    return (
        <>
            <Helmet
                title={`${project.data.project_title.text} | Kina's Portfolio`}
                titleTemplate={`${project.data.project_title.text} | Kina's Portfolio`}
                meta={[
                    {
                        name: `description`,
                        content: meta.description,
                    },
                    {
                        property: `og: title`,
                        content: `${project.data.project_title.text} | Kina's portfolio`,
                    },
                    {
                        property: `og:description`,
                        content: meta.description,
                    },
                    {
                        property: `og:type`,
                        content: `website`,
                    },
                    {
                        name: `twitter:card`,
                        content: `summary`,
                    },
                    {
                        name: `twitter:creator`,
                        content: meta.author,
                    },
                    {
                        name: `twitter:title`,
                        content: meta.title,
                    },
                    {
                        name: `twitter:description`,
                        content: meta.description,
                    },
                ].concat(meta)}
            />
            <ProjectLayout>
                <ProjectTitleAndDetailsContainer>
                    <ProjectTitle>
                        {project.data.project_title.text}
                    </ProjectTitle>
                    <ProjectDetails>
                        {project.data.project_details_column.map(column =>
                            <div>
                                <div dangerouslySetInnerHTML={{
                                    __html: column.title.html
                                }} />
                                <div dangerouslySetInnerHTML={{
                                    __html: column.list.html
                                }} />
                            </div>
                        )}
                    </ProjectDetails>
                </ProjectTitleAndDetailsContainer>
                {
                    project.data.project_hero_image && (
                        <ProjectHeroContainer>
                            <img src={project.data.project_hero_image.url} alt="bees" />
                        </ProjectHeroContainer>
                    )
                }
                <ProjectBody>
                    <ProjectText dangerouslySetInnerHTML={{
                        __html: project.data.project_description.html
                    }} />
                </ProjectBody>
            </ProjectLayout>
        </>
    )
}

export default ({ data }) => {
    const projectContent = data.allPrismicProject.edges[0].node;
    const meta = data.site.siteMetadata;
    return (
        <Project project={projectContent} meta={meta} />
    )
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
};

export const query = graphql`
    query ProjectQuery($uid: String) {
            allPrismicProject(filter: { uid : { eq: $uid } }) {
                edges {
                    node {
                        data {
                            project_title {
                                text
                            }
                            project_preview_description {
                                html
                            }
                            project_preview_thumbnail {
                                url
                            }
                            project_category {
                                text
                            }
                            project_post_date
                            project_hero_image {
                                url
                            }
                            project_description {
                                html
                            }
                            project_details_column {
                                title {
                                    html
                                }
                                list {
                                    html
                                }
                            }
                        }
                        uid
                    }
                }
            }
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`