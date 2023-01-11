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

export const getPostByUri = gql`
  query getPostByUri($id: ID!) {
    post(id: $id, idType: URI) {
      title
      content
      date
      author {
        node {
          firstName
          lastName
        }
      }
    }
  }
`
