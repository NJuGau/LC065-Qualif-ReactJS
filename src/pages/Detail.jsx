import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import FilmCard from "../components/film-card/FilmCard";
import {GET_FILM_DESC} from "../lib/queries/GetFilmDesc"

export default function Detail(){
    let {idMovie} = useParams();

    const {loading, data, error} = useQuery(GET_FILM_DESC,
        {
            variables:{
                id: idMovie
            }
        })

    if(loading) return <div>laoding...</div>
    return <div>
        {data.movie.map((films)=>{
            return <FilmCard>
                {films.title}
            </FilmCard>
    })}
    </div>;
}