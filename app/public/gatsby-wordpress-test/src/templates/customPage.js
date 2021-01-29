import React from "react"
import Layout from "../components/layout"

export default ({ pageContext }) => {
  pageContext = pageContext.data
  return (
    <Layout
      footerMenuItems={pageContext.footerMenuItems}
      headerMenuItems={pageContext.headerMenuItems}
    >
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      <ul>
        <h4>This renders in only Custom Page</h4>
        <li>We are</li>
        <li>The Chamh2ions</li>
        <li>my friends</li>
      </ul>
    </Layout>
  )
}
