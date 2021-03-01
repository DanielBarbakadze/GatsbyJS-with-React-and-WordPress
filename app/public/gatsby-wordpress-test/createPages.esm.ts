import { GatsbyCreatePages } from "./types"
// import { GatsbyCreatePages } from "./types"
const path = require(`path`)
const { slash } = require("gatsby-core-utils")
const { initialPages, getMenuItems } = require("./graphqlQueries")

const renderPageByTemplate = (template: string | any[]) => {
  if (template.length < 0) {
    return null
  }
  let page = template.slice(0, -4)
  let pageTemplate = path.resolve(`./src/templates/${page}.tsx`)
  return pageTemplate
}

export const createPages: GatsbyCreatePages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: "/",
    toPath: "/home",
    redirectInBrowser: true,
    isPermanent: true,
  })

  const result = await graphql(initialPages)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const {
    allWordpressPage,
    allWordpressPost,
    contactPage,
    aboutPage,
    homePage,
    footerMenuObjectIds,
    headerMenuObjectIds,
  } = result.data

  let footerMenuIds = JSON.stringify(
    footerMenuObjectIds.edges[0].node.items.map(
      (el: { object_id: number }) => el.object_id
    )
  )
  let headerMenuIds = JSON.stringify(
    headerMenuObjectIds.edges[0].node.items.map(
      (el: { object_id: number }) => el.object_id
    )
  )

  const menuItems = await graphql(getMenuItems(headerMenuIds, footerMenuIds))

  const { headerMenuItems, footerMenuItems } = menuItems.data
  const pageTemplate = path.resolve(`./src/templates/page.tsx`)

  allWordpressPage.edges.forEach(
    (edge: { node: { template: string; path: string; id: number } }) => {
      if (edge.node.template === "") {
        createPage({
          // Each page is required to have a `path` as well as a template component.
          // The `context` is optional but is often necessary so the template can query data specific to each page.
          path: edge.node.path,
          component: slash(
            pageTemplate
            // edge.node.template !== ""
            // ? pageTemplate
            // : renderPageByTemplate(edge.node.template)
          ),
          context: {
            id: edge.node.id,
            data: {
              ...edge.node,
              footerMenuItems: footerMenuItems,
              headerMenuItems: headerMenuItems,
            },
          },
        })
      }
    }
  )

  const postTemplate = path.resolve(`./src/templates/post.tsx`)
  // We want to create a detailed page for each post node.
  // The path field stems from the original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(
    (edge: { node: { path: string; id: number } }) => {
      createPage({
        path: edge.node.path,
        component: slash(postTemplate),
        context: {
          id: edge.node.id,
          footerMenuObjectIds: [22, 23, 24],
          headerMenuObjectIds: headerMenuIds,
          data: edge.node,
        },
      })
    }
  )

  // create pages seperately that needs different queries
  contactPage.edges.forEach(
    (edge: { node: { path: string; template: string; id: number } }) => {
      createPage({
        path: edge.node.path,
        component: slash(renderPageByTemplate(edge.node.template)),
        context: {
          id: edge.node.id,
          data: {
            ...edge.node,
            footerMenuItems: footerMenuItems,
            headerMenuItems: headerMenuItems,
          },
        },
      })
    }
  )

  // create pages seperately that needs different queries
  aboutPage.edges.forEach(
    (edge: { node: { path: string; template: string; id: number } }) => {
      createPage({
        path: edge.node.path,
        component: slash(renderPageByTemplate(edge.node.template)),
        context: {
          id: edge.node.id,
          data: {
            ...edge.node,
            footerMenuItems: footerMenuItems,
            headerMenuItems: headerMenuItems,
          },
        },
      })
    }
  )

  // create pages seperately that needs different queries
  homePage.edges.forEach(
    (edge: { node: { path: string; template: string; id: number } }) => {
      createPage({
        path: edge.node.path,
        component: slash(renderPageByTemplate(edge.node.template)),
        context: {
          id: edge.node.id,
          data: {
            ...edge.node,
            footerMenuItems: footerMenuItems,
            headerMenuItems: headerMenuItems,
          },
        },
      })
    }
  )
}
