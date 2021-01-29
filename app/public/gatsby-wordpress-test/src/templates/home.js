import React from "react"
import Layout from "../components/layout"

export default ({ pageContext }) => {
  pageContext = pageContext.data
  return (
    <Layout
      footerMenuItems={pageContext.footerMenuItems}
      headerMenuItems={pageContext.headerMenuItems}
    >
      <strong>Home Template</strong>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Layout>
  )
}
