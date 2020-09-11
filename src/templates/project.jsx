import React from 'react';
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "@emotion/styled";
import colors from "styles/colors";
import { Link, graphql } from 'gatsby';
import { RichText } from "prismic-reactjs";
import Button from "components/_ui/Button";
import Layout from "components/Layout";

const ProjectHeroContainer = styled("div")`
    background: ${colors.grey200};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
    padding-top: 2.25em;

    img {
        max-height: 700px;
        width: 100%;
    }
`

const ProjectTitle = styled("h1")`
    margin: 0 auto;
    text-align: left;
`

const ProjectBody = styled("div")`
    margin: 0;
    padding: 0 !important;
    max-width: 100% !important;
    background: white;

    .block-img {
        margin-top: 3.5em;
        margin-bottom: 0.5em;

        img {
            width: 100%;
        }
    }
`

const ProjectText = styled("div")`
padding-left: 15%;
padding-right: 15%;
padding-top: 20px;
padding-bottom: 20px;

h1, h2, h3, h4, h5, h6, p, li, a, strong {
    color: black;
    ::selection {
        color: black;
        background: #87CEFA;
      }
    ::-moz-selection {
        color: black;
        background: #87CEFA;
      }

    a:hover {
        color: ${colors.onHoverOrange};
    }
}
`



const Project = ({ project, meta }) => {
    return (
        <>
            <Helmet
                title={`${project.data.project_title.text} | Prist, Gatsby & Prismic Starter`}
                titleTemplate={`% s | ${meta.title} `}
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
            <Layout>
                <ProjectTitle>
                    {project.data.project_title.text}
                </ProjectTitle>
                {
                    project.data.project_hero_image && (
                        <ProjectHeroContainer>
                            <img src={project.data.project_hero_image.url} alt="bees" />
                        </ProjectHeroContainer>
                    )
                }
                <ProjectBody>
                    <ProjectText>
                        <div dangerouslySetInnerHTML={{
                            __html: project.data.project_description.html
                        }} />
                    </ProjectText>
                </ProjectBody>
            </Layout >
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