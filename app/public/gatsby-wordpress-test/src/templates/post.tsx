import React from "react"
import { MenuItems } from "../shared/interfaces/graphql.interface"

interface PostDataProps {
  pageContext: { data: any }
}

interface PostContext {
  footerMenuItems: MenuItems
  headerMenuItems: MenuItems
  title: string
  content: string
}

const contact: React.FC<PostDataProps> = ({ pageContext }) => {
  let pageContextData: PostContext = pageContext.data
  return (
    <div>
      <h1>{pageContextData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContextData.content }} />
    </div>
  )
}
