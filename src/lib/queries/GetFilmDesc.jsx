import { gql } from "@apollo/client";


export const GET_FILM_DESC = gql`
query($id: ID!){
    movies{
      movie(id: $id){
        id,
        title,
        backdrop(size: Original),
        genres{
          name
        }
      }
    }
  }
`