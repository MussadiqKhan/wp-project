import React from "react"
import "./about.styles.css"
import { graphql, useStaticQuery, Link } from "gatsby"

const AboutIndexEN = () => {
  const data = useStaticQuery(graphql`
    query AboutIndexEN {
      wpgraphql {
        pages(where: { name: "homepage" }) {
          nodes {
            translation(language: EN) {
              homepageSections {
                homepageAboutUsSection {
                  homepageAboutUsImage {
                    srcSet
                    mediaItemUrl
                    altText
                    mediaDetails {
                      height
                      width
                    }
                  }
                  homepageAboutUsTitle
                  homepageAboutUsDescription
                  homepageAboutUsCta
                  homepageAboutUsLink {
                    ... on WPGraphQl_Page {
                      slug
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      {data.wpgraphql.pages.nodes.map(node => (
        <div className="aboutindex-parent">
          <div className="aboutindex-image">
            <img
              src={
                node.translation.homepageSections.homepageAboutUsSection
                  .homepageAboutUsImage.mediaItemUrl
              }
            />
          </div>
          <div className="aboutindex-text">
            <h1>
              {
                node.translation.homepageSections.homepageAboutUsSection
                  .homepageAboutUsTitle
              }
            </h1>
            <p>
              {
                node.translation.homepageSections.homepageAboutUsSection
                  .homepageAboutUsDescription
              }
            </p>
            <Link
              to={
                node.translation.homepageSections.homepageAboutUsSection
                  .homepageAboutUsLink.slug
              }
            >
              <button>
                {
                  node.translation.homepageSections.homepageAboutUsSection
                    .homepageAboutUsCta
                }
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default AboutIndexEN
