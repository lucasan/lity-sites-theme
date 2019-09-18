import React from "react"
import { graphql } from "gatsby"
import useSiteMetadata from "../../hooks/use-site-metadata"
import Main from "./main"

export default (props) => {

  const page = props.data.page
  const site = useSiteMetadata()
  const title = `${page.title} - ${site.name}`

  return (
    <Main title={ title }>
      <article dangerouslySetInnerHTML={{ __html: page.content }} />
    </Main>
  )
}

export const query = graphql`
  query($id: String!) {
    page: wordpressPage(id: { eq: $id }) {
      date
      author {
        name
        path
      }
      path
      title
      content
    }
  }
`