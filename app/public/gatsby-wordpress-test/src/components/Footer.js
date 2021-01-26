import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const Header = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Footer Menu" } }
        ) {
          edges {
            node {
              items {
                title
                object_slug
                object_id
              }
            }
          }
        }
      }
    `}
    render={props => (
      <div>
        <p>
          Made By ❤. Creator - <strong>Daniel</strong>
        </p>
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
          item => (
            <Link to={`/${item.object_slug}`} key={`menu-${item.object_id}`}>
              {item.title}
            </Link>
          )
        )}
      </div>
    )}
  />
)

export default Header
