import React from "react"

export default ({ pageContext }) => {
  pageContext = pageContext.data
  return (
    <div>
      <h1>{pageContext.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </div>
  )
}
