import { Film} from "lucide-react";
import Link from "next/link";
import NavBar from "./components/navbar";
import Title from "./components/title";

export default function Home() {
    return(
        <main className="flex min-h-screen flex-col">
            <NavBar/>
            <Title>Séries em alta</Title>
            <Title>Filmes em alta</Title>
        </main>
    )
}