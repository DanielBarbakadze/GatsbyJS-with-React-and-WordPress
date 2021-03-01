import React from "react"
import Layout from "../components/layout"
import { MenuItems } from "../shared/interfaces/graphql.interface"

interface PageDataProps {
  pageContext: { data: any }
}

interface PageContext {
  footerMenuItems: MenuItems
  headerMenuItems: MenuItems
  title: string
  content: string
}

const contact: React.FC<PageDataProps> = ({ pageContext }) => {
  let pageContextData: PageContext = pageContext.data
  return (
    <>
      <Layout
        footerMenuItems={pageContextData.footerMenuItems}
        headerMenuItems={pageContextData.headerMenuItems}
      >
        <strong>Contact Template</strong>
        <h1 dangerouslySetInnerHTML={{ __html: pageContextData.title }} />
        <div dangerouslySetInnerHTML={{ __html: pageContextData.content }} />
      </Layout>
    </>
  )
}

export default contact
