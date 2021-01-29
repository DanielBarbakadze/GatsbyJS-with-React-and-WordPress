const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

const renderPageByTemplate = template => {
  if (template.length < 0) {
    return null
  }
  let page = template.slice(0, -4)
  // console.log("template -", template)
  pageTemplate = path.resolve(`./src/templates/${page}.js`)
  return pageTemplate
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: "/",
    toPath: "/home",
    redirectInBrowser: true,
    isPermanent: true,
  })

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
            template
            title
            content
            slug
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            path
            status
            template
            format
            title
            content
          }
        }
      }

      footerMenuObjectIds: allWordpressWpApiMenusMenusItems(
        filter: { name: { eq: "Footer Menu" } }
      ) {
        edges {
          node {
            items {
              object_id
            }
          }
        }
      }

      headerMenuObjectIds: allWordpressWpApiMenusMenusItems(
        filter: { name: { eq: "Header Menu" } }
      ) {
        edges {
          node {
            items {
              object_id
            }
          }
        }
      }

      contactPage: allWordpressPage(
        filter: { template: { eq: "contact.php" } }
      ) {
        edges {
          node {
            title
            content
            id
            path
            template
            acf {
              github
            }
          }
        }
      }

      aboutPage: allWordpressPage(filter: { template: { eq: "about.php" } }) {
        edges {
          node {
            title
            content
            id
            path
            template
          }
        }
      }

      homePage: allWordpressPage(filter: { template: { eq: "home.php" } }) {
        edges {
          node {
            title
            content
            id
            path
            template
          }
        }
      }
    }
  `)

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
    footerMenuObjectIds.edges[0].node.items.map(el => el.object_id)
  )
  let headerMenuIds = JSON.stringify(
    headerMenuObjectIds.edges[0].node.items.map(el => el.object_id)
  )

  const menuItems = await graphql(`
    {
      headerMenuItems: allWordpressPage(filter: { wordpress_id: { in: ${headerMenuIds} } }) {
        edges {
          node {
            id
            path
            title
            slug
          }
        }
      }
      footerMenuItems: allWordpressPage(filter: { wordpress_id: { in: ${footerMenuIds} } }) {
        edges {
          node {
            id
            path
            title
            slug
          }
        }
      }
    }
  `)

  const { headerMenuItems, footerMenuItems } = menuItems.data
  const pageTemplate = path.resolve(`./src/templates/page.js`)

  allWordpressPage.edges.forEach(edge => {
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
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  // We want to create a detailed page for each post node.
  // The path field stems from the original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(edge => {
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
  })

  // create pages seperately that needs different queries
  contactPage.edges.forEach(edge => {
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
  })

  // create pages seperately that needs different queries
  aboutPage.edges.forEach(edge => {
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
  })

  // create pages seperately that needs different queries
  homePage.edges.forEach(edge => {
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
  })
}
