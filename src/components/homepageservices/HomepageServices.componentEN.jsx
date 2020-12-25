import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./HomepageServices.styles.css"
import HomePageServiceListEN from "./HomePageServiceList.componentEN"

const HomepageServicesEN = ({language}) => {
  const data = useStaticQuery(graphql`
    query HomeServicesTextEN {
      wpgraphql {
        pages(where: { name: "homepage" }) {
          nodes {
            translation(language: EN) {
              homepageSections {
                homepageServiceSection {
                  homepageServicesDescription
                  homepageServicesCta
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
        <div className="homepageservice-title">
          <h2>
            {data.wpgraphql.pages.nodes.map(
              node =>
                node.translation.homepageSections.homepageServiceSection
                  .homepageServicesDescription
            )}
          </h2>
        </div>
      </div>
      <HomePageServiceListEN />
    </>
  )
}

export default HomepageServicesEN
