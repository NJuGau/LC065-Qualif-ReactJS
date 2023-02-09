import { gql } from "@apollo/client";

export const FETCH_ALL_FILM = gql`
query{
  movies{
    trending{
      edges{
        node{
          id,
          title,
          poster(size: Original)
        }
      }
    }
  }
}
`