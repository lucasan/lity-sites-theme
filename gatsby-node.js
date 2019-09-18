const createPosts = require(`./src/nodes/create-posts`)
const createPages = require(`./src/nodes/create-pages`)

exports.createPages = async ({ graphql, actions }) => {
  createPosts({ graphql, actions })
  createPages({ graphql, actions })
}