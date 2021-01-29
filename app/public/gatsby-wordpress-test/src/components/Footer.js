import React from "react"
import {
  Link,
  // StaticQuery, graphql,
} from "gatsby"

const Footer = ({ footerMenuItems }) => (
  <div>
    {footerMenuItems.edges.map(item => (
      <Link to={`${item.node.path}`} key={`menu-${item.node.id}`}>
        {item.node.title}
      </Link>
    ))}
  </div>
  // <StaticQuery
  //   query={graphql`
  //     query($footerMenuObjectIds: [Int]) {
  //       allWordpressPage(
  //         filter: { wordpress_id: { in: $footerMenuObjectIds } }
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
  //       {console.log("footer", props)}
  //       <p>
  //         Made By ❤. Creator - <strong>Daniel</strong>
  //       </p>
  //       {props.allWordpressPage.edges.map(item => (
  //         <Link to={`${item.node.path}`} key={`menu-${item.node.id}`}>
  //           {item.node.title}
  //         </Link>
  //       ))}
  //     </div>
  //   )}
  // />
)

export default Footer
