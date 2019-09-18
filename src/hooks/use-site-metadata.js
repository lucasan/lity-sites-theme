import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const site = useStaticQuery(
    graphql`
      query {
        wordpressSiteMetadata {
          name
          description
        }
      }
    `
  )

  return site.wordpressSiteMetadata
}

export default useSiteMetadata