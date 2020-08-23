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

const Hero = styled("div")`
    padding-top: 2.5em;
    padding-bottom: 3em;
    max-width: 423px;
    font-family: Metropolis Regular;
    color: ${colors.charcoalBlack};
    @media(max-width:${dimensions.maxwidthMobile}px) {
       margin-bottom: 3em;
    }

    h1 {
        margin-bottom: 1em;
        font-size: 40px;


        a {
            text-decoration: underline;

            color: ${colors.primaryBlue};

            &:hover {
                color: ${colors.secondaryBlue};
            }
        }
    }

    h2 {
        font-size: 24px;
        font-family: HKGrotesk Light;


        a {
            text-decoration: underline;

            color: ${colors.primaryBlue};

            &:hover {
                color: ${colors.secondaryBlue};
            }
        }
    }
`

const Section = styled("div")`
    margin-bottom: 10em;
    display: flex;
    flex-direction: column;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 4em;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`

const RenderBody = ({ home, projects, meta }) => (
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
            <>
                {RichText.render(home.hero_title)}
            </>
            <>
                {RichText.render(home.hero_subtitle)}
            </>
        </Hero>
        <Section>
            {projects.map((project, i) => (
                <ProjectCard
                    key={i}
                    category={project.node.project_category}
                    title={project.node.project_title}
                    description={project.node.project_preview_description}
                    thumbnail={project.node.project_preview_thumbnail}
                    uid={project.node._meta.uid}
                />
            ))}
        </Section>
    </>
);

export default ({ data }) => {
    //Required check for no data being returned
    const doc = data.prismic.allHomepages.edges.slice(0, 1).pop();
    const projects = data.prismic.allProjects.edges;
    const meta = data.site.siteMetadata;

    if (!doc || !projects) return null;

    return (
        <Layout>
            <RenderBody home={doc.node} projects={projects} meta={meta} />
        </Layout>
    )
}

RenderBody.propTypes = {
    home: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
};

export const query = graphql`
    {
        prismic {
            allHomepages {
                edges {
                    node {
                        hero_title
                        hero_subtitle
                        content
                    }
                }
            }
            allProjects {
                edges {
                    node {
                        project_title
                        project_preview_description
                        project_preview_thumbnail
                        project_category
                        project_post_date
                        _meta {
                            uid
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