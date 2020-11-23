import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { RichText } from "prismic-reactjs";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import About from "components/About";
import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";
import IdeaCard from "components/IdeaCard";

const Hero = styled("div")`
    padding-top: 2.5em;
    padding-bottom: 3em;
    @media(max-width:${dimensions.maxwidthMobile}px) {
       margin-bottom: 3em;
    }

    h1 {
        margin-bottom: 1em;

        a {
            text-decoration: none;

            color: ${colors.orange};

            &:hover {
                color: ${colors.onHoverOrange};
            }
        }
    }

    h2 {
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        color: ${colors.grey2}
    }
`
const AboutDiv = styled("div")`
    padding-top: 2.5em;
    display: flex;
    justify-content: space-between;
    img {
        margin-left: 3em;
    }

    @media(max-width:${dimensions.maxwidthTablet}px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items:center;
        img {
            margin-bottom: 1em;
        }
     }

     @media(max-width:${dimensions.maxwidthMobile}px) {
        justify-content: start;
        align-items:flex-start;
        
     img {
        margin-left: 0;
        }
     }
`

const AboutSection = styled("div")`
    padding-top: 6em;
    padding-bottom: 3em;
    @media(max-width:${dimensions.maxwidthMobile}px) {
       margin-bottom: 3em;
    }

    p {
        margin-block-start: 0;
        font-size: 20px;
        line-height: 28px;
        max-width: 654px;
        color: ${colors.grey1};
        margin-bottom: 2em;
    }
    ul {
        padding-inline-start: 0;
    }
    li {
        font-size: 20px;
        line-height: 28px;
        max-width: 654px;
        color: ${colors.grey2};
        list-style-type:none;
    }

    a {
        text-decoration: underline;

        color: ${colors.orange};

        &:hover {
            color: ${colors.onHoverOrange};
        }
    }
`

const Section = styled("div")`
    overflow-x: auto;
    overflow-y: hidden;
    display:inline-block;
    white-space:nowrap;
    max-width: 100%;


    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 4em;
    }

    
    @media(max-width:${dimensions.maxwidthMobile}px) {
        margin-bottom: 4em;
    }

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
      
`

const RenderBody = ({ home, projects, meta, imageUrl, ideas }) => (
    <>
        <Helmet
            title={`Kina`}
            titleTemplate={`%s | ${meta.title}`}
            
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: meta.title,
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
            ].concat(
                imageUrl
                  ? [
                      {
                        property: "og:image",
                        content: imageUrl,
                      },
                      {
                        property: "og:image:width",
                        content: "1200px",
                      },
                      {
                        property: "og:image:height",
                        content: "630px",
                      },
                      {
                        name: "twitter:card",
                        content: "summary_large_image",
                      },
                    ]
                  : [
                      {
                        name: "twitter:card",
                        content: "summary",
                      },
                    ]
              )
              .concat(meta)}
        />
        <Hero id="projects">
            <div dangerouslySetInnerHTML={{
                __html: home.hero_title.html
            }} />
            <div dangerouslySetInnerHTML={{
                __html: home.hero_subtitle.html
            }} />
        </Hero>
        <Section>
            {projects.map((project, i) => (
                <ProjectCard
                    key={i}
                    category={project.node.data.project_category}
                    title={project.node.data.project_title}
                    description={project.node.data.project_preview_description}
                    thumbnail={project.node.data.project_preview_thumbnail}
                    mobileThumbnail = {project.node.data.project_preview_thumbnail_mobile}
                    uid={project.node.uid}
                />
            ))}
        </Section>
        <AboutSection id="about">
            <div dangerouslySetInnerHTML={{
                __html: home.about_header.html
            }} />
            <AboutDiv>
                <div dangerouslySetInnerHTML={{
                    __html: home.about_main_text.html
                }} />
                <img width="280px" height="280px" src={home.profile_photo.url} alt={'Kinanti'} />
            </AboutDiv>
            <div dangerouslySetInnerHTML={{
                __html: home.about_links_header.html
            }} />
            <div dangerouslySetInnerHTML={{
                __html: home.about_links_section.html
            }} />

        </AboutSection>
        <Hero id="ideas">
            <div dangerouslySetInnerHTML={{
                __html: home.ideas_header.html
            }} />
            <div dangerouslySetInnerHTML={{
                __html: home.ideas_subheading.html
            }} />
        </Hero>
        <Section>
            {ideas.map((idea, i) => (
                <IdeaCard
                    key={i}
                    title={idea.node.data.title}
                    thumbnail={idea.node.data.thumbnail}
                    link={idea.node.data.link}
                />
            ))}
        </Section>
    </>
);

export default ({ data }) => {
    //Required check for no data being returned
    const doc = data.allPrismicHomepage.edges.slice(0, 1).pop().node.data;
    const projects = data.allPrismicProject.edges;
    const ideas = data.allPrismicIdeas.edges;
    const meta = data.site.siteMetadata;
    const imageUrl = data.allPrismicHomepage.edges.slice(0, 1).pop().node.data.social_sharing_image.url;
    if (!doc || !projects || !ideas) return null;

    return (
            <Layout>
                <RenderBody home={doc} projects={projects} meta={meta} imageUrl={imageUrl} ideas={ideas} />
            </Layout>
    )
}

RenderBody.propTypes = {
    home: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
    ideas: PropTypes.array.isRequired,
};

export const query = graphql`
    {
        allPrismicHomepage {
                edges {
                    node {
                        data {
                            hero_title {
                                html
                            }
                            hero_subtitle {
                                html
                            }
                            content {
                                html
                            }
                            about_header {
                                html
                            }
                            about_main_text {
                                html
                            }
                            about_links_header {
                                html
                            }
                            about_links_section {
                                html
                            }
                            ideas_header {
                                html
                            }
                            ideas_subheading {
                                html
                            }
                            profile_photo {
                                url
                            }
                            social_sharing_image {
                                url
                            }
                        }
                    }
                }
            }
            allPrismicProject {
                edges {
                    node {
                        data {
                            project_title {
                                text
                            }
                            project_preview_description {
                                text
                            }
                            project_preview_thumbnail {
                                url
                            }
                            project_preview_thumbnail_mobile {
                                url
                            }
                            project_category {
                                text
                            }
                            project_post_date
                        }
                        uid
                    }
                }
            }
            allPrismicIdeas {
                edges {
                    node {
                        data {
                            title {
                                text
                            }
                            link {
                                url
                                target
                            }
                            thumbnail {
                                url
                            }
                        }
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