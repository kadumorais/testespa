import { Film} from "lucide-react";
import Link from "next/link";
import NavBar from "../components/navbar";

export default function Sobre() {
    return(
        <main>
            <NavBar/>
            <h2 className="font-medium text-lg border-amber-500 border-l-8 pl-2 m-4">Sobre</h2>
        </main>
    )
}