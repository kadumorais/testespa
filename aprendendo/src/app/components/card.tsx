"use client";
import { Bookmark, BookMarked, Popcorn, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useFavorito } from './../hooks/Usefavorito';
import { getMovies } from "../actions/getMovies";
interface FilmesProps{
    filme: Filme
}

export default function Filmes({filme}: FilmesProps){

    const {carregarFavoritos, favorito, favoritar, desfavoritar} = useFavorito(filme)

    useEffect( () => carregarFavoritos, [] )
    return(
        <div className="flex flex-col items-center w-48 gap-2 relative">
            {favorito ?
                <BookMarked className="absolute right-2 top-2 text-amber-400" onClick={desfavoritar} /> :
                <Bookmark className="absolute right-2 top-2" onClick={favoritar} />
            }
            <img className="rounded-lg" src={"https://image.tmdb.org/t/p/w500/"+filme.poster_path} alt="poster do filme" />
            <span className="text-lg text-center font-medium line-clamp-1">{filme.title}</span>
            <div className="flex gap-2">
                <Star className="text-amber-400" size={18}/>
                <span className="opacity-55">{filme.vote_average.toFixed(1)}</span>
            </div>
            <a href="" className="bg-amber-400 py-1 px-6 rounded-lg">
                DETALHES
            </a>

        </div>
    )
}

router