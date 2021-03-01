import React from "react"
import Layout from "../components/layout"
import { MenuItems } from "../shared/interfaces/graphql.interface"

interface AboutDataProps {
  pageContext: { data: any }
}

interface AboutContext {
  footerMenuItems: MenuItems
  headerMenuItems: MenuItems
  title: string
  content: string
}

const contact: React.FC<AboutDataProps> = ({ pageContext }) => {
  let pageContextData: AboutContext = pageContext.data
  return (
    <Layout
      footerMenuItems={pageContextData.footerMenuItems}
      headerMenuItems={pageContextData.headerMenuItems}
    >
      <strong>About Template</strong>
      <h1 dangerouslySetInnerHTML={{ __html: pageContextData.title }} />
      <div dangerouslySetInnerHTML={{ __html: pageContextData.content }} />
    </Layout>
  )
}

export default contact
