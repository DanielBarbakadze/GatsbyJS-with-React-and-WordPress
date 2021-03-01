import React from "react"
import { Link } from "gatsby"
import { MenuItems } from "../shared/interfaces/graphql.interface"

interface HeaderDataProps {
  headerMenuItems: MenuItems
}

const Header: React.FC<HeaderDataProps> = ({ headerMenuItems }) => (
  <div>
    {headerMenuItems?.edges.map(item => (
      <Link to={`${item.node.path}`} key={`menu-${item.node.id}`}>
        {item.node.title}
      </Link>
    ))}
  </div>
)

export default Header
