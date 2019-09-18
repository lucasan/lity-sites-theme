const slash = require(`slash`)

module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions

  const result = await graphql(`
      {
        allWordpressPost(filter: {status: {eq: "publish"}}) {
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

  const { allWordpressPost } = result.data

  const postTemplate = require.resolve(`../theme/templates/post.js`)

  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}