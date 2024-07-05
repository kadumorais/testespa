import { Film} from "lucide-react";
import Link from "next/link";

export default function NavBar() {
    return(
        <main className="flex flex-col items-center justify-between">
            <nav className="flex justify-between bg-slate-700 w-full p-4">
                <div className="flex gap-2 items-center">
                    <Film className="text-amber-400" size={28} />
                    <Link className="text-amber-400 text-2xl" href="/">Sanac Filmes</Link>
                </div>
                <Link href="/sobre">Sobre</Link>
            </nav>
        </main>
    )
}