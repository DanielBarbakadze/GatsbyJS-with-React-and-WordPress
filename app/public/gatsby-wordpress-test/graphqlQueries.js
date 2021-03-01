const allWordpressPage = `
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
`

const allWordpressPost = `
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
`

const footerMenu = `
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
`

const headerMenu = `
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
`

const contactPage = `
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
`

const aboutPage = `
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
`

const homePage = `
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
`

module.exports.getMenuItems = (headerMenuIds, footerMenuIds) => `
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
`
module.exports.initialPages = `
{
    ${allWordpressPage}
    ${allWordpressPost}
    ${footerMenu}
    ${headerMenu}
    ${contactPage}
    ${aboutPage}
    ${homePage}
}
`
