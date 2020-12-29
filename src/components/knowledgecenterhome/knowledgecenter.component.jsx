import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import "./knowledgecenter.styles.css"

const KnowledgeCenterHome = props => {
  const data = useStaticQuery(graphql`
    query knowledgeServicesHome {
      wpgraphql {
        contentNodes(
          where: {
            language: IT
            status: PUBLISH
            contentTypes: [POST, PROJECTS, NEWS]
            orderby: { field: DATE, order: ASC }
          }
          last: 4
        ) {
          nodes {
            slug
            ... on WPGraphQl_Post {
              title
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
              categories {
                nodes {
                  name
                }
              }
            }
            ... on WPGraphQl_Project {
              title
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
              categories {
                nodes {
                  name
                }
              }
            }
            ... on WPGraphQl_News {
              title
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
              categories {
                nodes {
                  name
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
      <div className="">
        <div className="parent_knowledgehome">
          {data.wpgraphql.contentNodes.nodes.map(data => (
            <div className="child_knowledgehome">
              <img src={data.mainImage.mainImageFile.mediaItemUrl} />
              <div className="category">
                {data.categories.nodes.map(name => name.name)}
              </div>
              <div className="title">
                {data.title}
              </div>
              <div className='cta'><Link to={data.slug}>{props.cta}</Link> <hr/></div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default KnowledgeCenterHome
