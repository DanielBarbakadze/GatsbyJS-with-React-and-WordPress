export interface MenuItems {
  edges: MenuItem[]
}

export interface MenuItem {
  node: {
    id: number
    title: string
    path: string
  }
}
