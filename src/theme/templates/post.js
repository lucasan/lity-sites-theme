import React from "react"
import { graphql } from "gatsby"
import useSiteMetadata from "../../hooks/use-site-metadata"
import Main from "./main"

export default (props) => {

  const post = props.data.post
  const site = useSiteMetadata()
  const title = `${post.title} - ${site.name}`

  return (
    <Main title={ title }>
      <article dangerouslySetInnerHTML={{ __html: post.content }} />
    </Main>
  )
}

export const query = graphql`
  query ($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      date
      author {
        name
        path
      }
      path
      title
      content
      type
      categories {
        name
        link
        count
      }
    }
  }
`