import React from "react"
import {
  Link,
  // StaticQuery, graphql,
} from "gatsby"

const Header = ({ headerMenuItems }) => (
  <div>
    {headerMenuItems.edges.map(item => (
      <Link to={`${item.node.path}`} key={`menu-${item.node.id}`}>
        {item.node.title}
      </Link>
    ))}
  </div>
  // <StaticQuery
  //   query={graphql`
  //     query($headerMenuObjectIds: [Int]) {
  //       allWordpressPage(
  //         filter: { wordpress_id: { in: $headerMenuObjectIds } }
  //       ) {
  //         edges {
  //           node {
  //             id
  //             path
  //             title
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={props => (
  //     <div>
  //       {props.allWordpressPage.edges.map(item => (
  //         <Link to={`${item.node.path}`} key={`menu-${item.node.id}`}>
  //           {item.node.title}
  //         </Link>
  //       ))}
  //     </div>
  //   )}
  // />
)

export default Header
