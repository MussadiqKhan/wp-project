import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./HomepageServices.styles.css"
import HomePageServiceList from "./HomePageServiceList.component"

const HomepageServices = ({language}) => {
  const data = useStaticQuery(graphql`
    query HomeServicesText {
      wpgraphql {
        pages(where: { name: "homepage" }) {
          nodes {
            translation(language: IT) {
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
      <HomePageServiceList />
    </>
  )
}

export default HomepageServices
