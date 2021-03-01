import React from "react"
import Layout from "../components/layout"
import { MenuItems } from "../shared/interfaces/graphql.interface"

interface CustomPageDataProps {
  pageContext: { data: any }
}

interface CustomPageContext {
  footerMenuItems: MenuItems
  headerMenuItems: MenuItems
  title: string
  content: string
}

const contact: React.FC<CustomPageDataProps> = ({ pageContext }) => {
  let pageContextData: CustomPageContext = pageContext.data
  return (
    <Layout
      footerMenuItems={pageContextData.footerMenuItems}
      headerMenuItems={pageContextData.headerMenuItems}
    >
      <h1 dangerouslySetInnerHTML={{ __html: pageContextData.title }} />
      <div dangerouslySetInnerHTML={{ __html: pageContextData.content }} />
      <ul>
        <h4>This renders in only Custom Page</h4>
        <li>We are</li>
        <li>The Chamh2ions</li>
        <li>my friends</li>
      </ul>
    </Layout>
  )
}
