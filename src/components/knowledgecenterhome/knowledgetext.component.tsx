import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./knowledgecenter.styles.css"
import KnowledgeCenterHome from "../../components/knowledgecenterhome/knowledgecenter.component"

const KnowledgeText = () => {
  const data = useStaticQuery(graphql`
    query HomepageKnowledgeText {
      wpgraphql {
        pages(where: { name: "homepage" }) {
          nodes {
            translation(language: IT) {
              homepageSections {
                homepageKnowledgeCenterSection {
                  homepageKnowledgeCenterTitle
                  homepageKnowledgeCenterDescription
                  homepageKnowledgeCenterCta
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <div className="container">
        {data.wpgraphql.pages.nodes.map(data => (
          <div className='headings'>
            <h6>
              {
                data.translation.homepageSections.homepageKnowledgeCenterSection
                  .homepageKnowledgeCenterTitle
              }
            </h6>
            <h3>
              {
                data.translation.homepageSections.homepageKnowledgeCenterSection
                  .homepageKnowledgeCenterDescription
              }
            </h3>
            <KnowledgeCenterHome cta={data.translation.homepageSections.homepageKnowledgeCenterSection.homepageKnowledgeCenterCta} />

          </div>
        ))}

      </div>
    </div>
  )
}

export default KnowledgeText
