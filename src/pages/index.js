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
        font-size: 40px;

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
    padding-top: 3em;
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
    padding-top: 3em;
    padding-bottom: 3em;
    @media(max-width:${dimensions.maxwidthMobile}px) {
       margin-bottom: 3em;
    }

    h1 {
        margin: 0;
        font-size: 48px;
    }
    h2 {
        font-size: 24px;
        line-height: 29px;
        font-weight: 600;
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

    @media(max-width:${dimensions.maxwidthTablet}px) {
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

const RenderBody = ({ home, projects, meta, ideas }) => (
    <>
        <Helmet
            title={meta.title}
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
            ].concat(meta)}
        />
        <Hero>
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

    if (!doc || !projects || !ideas) return null;

    return (
        <Layout>
            <RenderBody home={doc} projects={projects} meta={meta} ideas={ideas} />
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