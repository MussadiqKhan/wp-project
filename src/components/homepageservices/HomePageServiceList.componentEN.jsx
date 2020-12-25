import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./HomepageServices.styles.css"

const HomePageServiceListEN = ({language}) => {
  const data = useStaticQuery(graphql`
    query HomeServicesEN {
      wpgraphql {
        categories(where: { parent: 0, language: EN, orderby: TERM_ORDER }) {
          nodes {
            services {
              nodes {
                title
                slug
                mainImage {
                  mainImageFile {
                    srcSet
                    mediaItemUrl
                    altText
                    mediaDetails {
                      height
                      width
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
      <div className="container">
        <div className="homepageservice-parent">
          {data.wpgraphql.categories.nodes.map(node =>
            node.services.nodes.map(service => (
              <div
                className="child"
                style={{
                  backgroundImage:
                    `url(${service.mainImage.mainImageFile.mediaItemUrl})`,
                    
                }}
              >
<h4>{service.title}</h4>

              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default HomePageServiceListEN
