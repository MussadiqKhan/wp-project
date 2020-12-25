import React from "react"
import '../components/style.css'
import Banner from "../components/banner/banner.component"
import HomepageServices from "../components/homepageservices/HomepageServices.component"
import AboutIndex from "../components/about/about.components"

const IndexPage = () => (
  <div>
    <Banner />
    <HomepageServices />
    <AboutIndex />
  </div>
)

export default IndexPage
