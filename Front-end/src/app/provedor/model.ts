export class Pendente{
    id: number;
    nome: string;
    latitude: number;
    longitude: number;
    cpf: string;
    telefone: string;
    email: string;
    data: Date;
}

export class Caixa{
    id : number;
    nome: string;
    latitude: number;
    longitude: number;
    provedor : Provedor;
    vinculos : [];
    solicitacoes : Solicitacao[];
}

export class Cliente {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    cep: string;
    cpf: string;
    latitude: number;
    longitude: number;
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
    caixa = new Caixa();
    provedor = new Provedor();
    cliente = new Cliente();
    addCaixa : number;
}

export class Linha {
    inicioLat: number;
    inicioLng: number;
    fimLat: number;
    fimLng: number;
}

export class Notificacao {
    id: number;
    descricao: string;
    provedor = new Provedor();
    latitude: string;
    longitude: string;
    tipo: string;
}