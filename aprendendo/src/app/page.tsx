import { Film} from "lucide-react";
import Link from "next/link";
import NavBar from "./components/navbar";
import Title from "./components/title";
import Card from './components/card';
import { getMovies } from "./actions/getMovies";

//flex-wrap para responsividade

export default async function Home() {

    const filmes: Filme[] = await getMovies()

    return(
        <main className="flex min-h-screen flex-col">
            <NavBar/>
            <Title>Séries em alta</Title>
            <section className="flex flex-wrap gap-8 m-8">
                {filmes.map(filme => <Card key={filme.id} filme={filme}/>)}
            </section>
            <Title>Filmes em alta</Title>
        </main>
    )
}
