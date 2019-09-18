const slash = require(`slash`)

module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions

  const result = await graphql(`
      {
        allWordpressPage(filter: {status: {eq: "publish"}}) {
          edges {
            node {
              id
              path
            }
          }
        }
      }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allWordpressPage } = result.data

  const postTemplate = require.resolve(`../theme/templates/page.js`)

  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}