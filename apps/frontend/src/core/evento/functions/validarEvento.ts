import Evento from "../model/Evento";

export default function validarEvento(evento: Partial<Evento>): string[] {
    const errors: string[] = [];

    if (!evento.alias) {
        errors.push("Alias é obrigatório")
    }

    if (!evento.nome) {
        errors.push("Nome é obrigatório")
    }

    if (!evento.descricao) {
        errors.push("Descrição é obrigatória")
    }

    if (!evento.data) {
        errors.push("Data é obrigatória")
    }
    if (!evento.local) {
        errors.push("Local é obrigatório")
    }
    if (!evento.imagem) {
        errors.push("Imagem é obrigatória")
    }
    if (!evento.imagemBackground) {
        errors.push("Imagem de fundo é obrigatória")
    }

    return errors;

}