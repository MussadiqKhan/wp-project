import React from "react"
import '../components/style.css'
import Banner from "../components/banner/banner.component"
import HomepageServices from "../components/homepageservices/HomepageServices.component"
import AboutIndex from "../components/about/about.components"
import KnowledgeText from "../components/knowledgecenterhome/knowledgetext.component"

const IndexPage = () => (
  <div>
    <Banner />
    <HomepageServices />
    <AboutIndex />
    <KnowledgeText />
  </div>
)

export default IndexPage
