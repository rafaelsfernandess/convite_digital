import { Evento } from "@/core";

export interface InformacoesEventoProps {
    evento: Evento;
}

export default function InformacoesEvento(props: InformacoesEventoProps) {
    return (
        <div>
            <span>InformacoesEvento</span>
        </div>
    )
}