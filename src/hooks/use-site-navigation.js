import { graphql, useStaticQuery } from "gatsby"

const useSiteNavigation = () => {

  const menu = useStaticQuery(
    graphql`
      query {
        allWordpressWpApiMenusMenusItems {
          edges {
            node {
              items {
                title
                url
                object_id
                object_slug
              }
            }
          }
        }
    }
    `
  )

  return menu.allWordpressWpApiMenusMenusItems.edges.map((edge) => {
    return edge.node.items.map((item) => {
      return item
    })
  })
}

export default useSiteNavigation