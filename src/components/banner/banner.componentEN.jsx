import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Carousel from "react-bootstrap/Carousel"
import "./banner.styles.css"

const BannerEN = () => {
  const data = useStaticQuery(graphql`
    query HomeSloganEN {
      wpgraphql {
        pages(where: { name: "homepage", language: EN }) {
          nodes {
            homepageSections {
              homepageSloganSection {
                homepageSloganImage {
                  srcSet
                  altText
                  mediaItemUrl
                  mediaDetails {
                    height
                    width
                  }
                }
                homepageSloganText
              }
            }
          }
        }
      }
    }
  `)

  console.log(data.wpgraphql.pages)
  return <div>
      <Carousel>
        {data.wpgraphql.pages.nodes.map(node =>
          node.homepageSections.homepageSloganSection.map(img => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img.homepageSloganImage.mediaItemUrl}
                alt="First slide"
                width={img.homepageSloganImage.mediaDetails.width}
                height="808px"
              />
              <Carousel.Caption>
                <h1>{img.homepageSloganText}</h1>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        )}
      </Carousel>

  </div>
}

export default BannerEN
