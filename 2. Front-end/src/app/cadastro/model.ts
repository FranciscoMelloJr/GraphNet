export class Cliente {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    cep: string;
    cpf: string;
    latitude: string;
    longitude: string;
    status: string;
}

export class Provedor{
    cep: string;
    cnpj: string;
    email: string;
    id: number;
    nomeFantasia: string;
    razaoSocial: string;
    senha: string;
    telefone: string;
}

export class Solicitacao {
    id: number;
    status: string;
    provedor = new Provedor();
    cliente = new Cliente();
}

export class Notificacao {
    id: number;
    descricao: string;
    provedor = new Provedor();
    latitude: string;
    longitude: string;
}