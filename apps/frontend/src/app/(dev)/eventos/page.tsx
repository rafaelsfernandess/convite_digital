import { eventos } from "@/core";
import Image from "next/image";

export default function PaginaEventos() {

    return (

        <div className="grid grid-cols-3 gap-5">
            {
                eventos.map((evento) => (
                    <div key={evento.id} className="flex flex-col w-96 bg-zinc-800 rounded-lg ">
                        <div className="relative w-96 h-44">
                            <Image src={evento.imagem} fill alt={evento.nome} className="object-cover"/>
                        </div>
                        <span >{evento.nome}</span>
                    </div>
                ))
            }
        </div>

    );
}