import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import FilmCard, { ImageCard } from "../components/film-card/FilmCard";
import { FETCH_ALL_FILM } from "../lib/queries/GetAllFilm";


export default function Home(){
    const { loading, data, error } = useQuery(FETCH_ALL_FILM);
    console.log(data)
    if(loading) return <h1>loading...</h1>

    return (
        <div>
            {data.movies.trending.edges.map((film)=>{
                return <FilmCard key = {film.node.id}>
                    <ImageCard src={film.node.poster} />
                    <Link to={`/film/${film.node.id}`}>
                    {film.node.title}
                    </Link>
                </FilmCard>
            })}
        </div>

    );
}




