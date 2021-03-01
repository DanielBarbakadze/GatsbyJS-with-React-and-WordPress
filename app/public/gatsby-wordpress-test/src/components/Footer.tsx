import React from "react"
import { Link } from "gatsby"
import { MenuItems } from "../shared/interfaces/graphql.interface"

interface FooterDataProps {
  footerMenuItems: MenuItems
}

const Footer: React.FC<FooterDataProps> = ({ footerMenuItems }) => (
  <div>
    {footerMenuItems?.edges.map(item => (
      <Link to={`${item.node.path}`} key={`menu-${item.node.id}`}>
        {item.node.title}
      </Link>
    ))}
    <h2>TYPESCRIPT VERSION</h2>
  </div>
)

export default Footer
