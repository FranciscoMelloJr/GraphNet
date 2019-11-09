export class Pendente{
    nome: string;
    latitude: number;
    longitude: number;
    cpf: string;
    telefone: string;
    email: string;
    data: Date;
}

export class Caixa{
    nome: string;
    latitude: number;
    longitude: number;
    provedor : Provedor;
    solicitacoes : Solicitacao[];
}

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
    data: Date;
    provedor = new Provedor();
    cliente = new Cliente();
}

export class Linha {
    inicioLat: number;
    inicioLng: number;
    fimLat: number;
    fimLng: number;
}