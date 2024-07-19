import { Film} from "lucide-react";
import Link from "next/link";
import NavBar from "./components/navbar";
import Title from "./components/title";
import Card from './components/card';

//flex-wrap para responsividade

export default function Home() {
    const filmes = [
    {
        id:1,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7qOSKoOAPgemYhBwbJgBWcCxPWZ.jpg",
        titulo: "Furiosa: Uma saga Mad Max",
        nota:6.7
    },
    {
        id:2,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ozkOzFITxLmp5nkjvuawQaRHNF3.jpg",
        titulo: "Halloween - A Noite do Terror ",
        nota:7.6
    },
    {
        id:3,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sE19OYWcnAigvk8VTdLVfeirwif.jpg",
        titulo: "Anjos da Noite: Underworld",
        nota:5.5
    }
]
    return(
        <main className="flex min-h-screen flex-col">
            <NavBar/>
            <Title>Séries em alta</Title>
            <section className="flex flex-wrap gap-8 m-8">
                {filmes.map( filme => <Card filme={filme}/>)}
            </section>
            <Title>Filmes em alta</Title>
        </main>
    )
}
