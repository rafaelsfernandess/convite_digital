import Convidado from "../model/Convidado";

export default function validarConvidado(convidado: Partial<Convidado>): string[] {
    const errors: string[] = [];

    if (!convidado.nome) {
        errors.push("Nome é obrigatório");
    }
    if (!convidado.email) {
        errors.push("Email é obrigatório");
    }
    if (!convidado.nome) {
        errors.push("Nome é obrigatório");
    }

    return errors;

}