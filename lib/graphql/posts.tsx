import { gql } from '@apollo/client'

export const getAllPosts = gql`
  query getAllPosts {
    posts {
      nodes {
        title
        content
        date
        uri
      }
    }
  }
`
