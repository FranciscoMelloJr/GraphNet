export class Analise {
    id: number
    provedor = new Provedor();
    cliente = new Cliente();
    estrelas: number;
    textoAnalise: string;
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

export class Caixa{
    id : number;
    nome: string;
    latitude: number;
    longitude: number;
    provedor : Provedor;
    vinculos : [];
    solicitacoes : Solicitacao[];
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