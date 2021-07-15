export const formSchema = [
  {
    inputType: "text",
    name: "mike",
    title: "N do MIKE",
    placeholder: "NÚMERO DA OCORRÊNCIA ",
  },
  {
    inputType: "text",
    name: "matricula",
    title: "Matrícula",
    placeholder: "MATRÍCULA DO CONDUTOR",
  },

  {
    inputType: "text",
    name: "gt",
    title: "Guarnição",
    placeholder: "Ex: GTE 5055",
  },

  {
    inputType: "text",
    name: "efetivo",
    title: "Efetivo",
    placeholder: "Ex: CB José , SD Maria , SD João ",
  },
  


  {
    inputType: "text",
    name: "responsavel",
    title: "RESPONSÁVEL",
    placeholder: "CONDUTOR DA OCORRÊNCIA",
  },

  {
    inputType: "text",
    name: "tipoOcorr",
    title: "Descrição da Natureza	",
    placeholder: "Ex: Furto ,Roubo ",
  },
  

  {
    inputType: "text",
    name: "endereco",
    title: "Logradouro",
    placeholder: "Ex: Rua 10 ,N 13",
  },

  {
    inputType: "text",
    name: "bairro",
    title: "Bairro",
    placeholder: "Ex: Centro",
  },
  {
    inputType: "text",
    name: "numero",
    title: "Número",
    placeholder: "Ex: 321",
  },

  {
    inputType: "text",
    name: "cep",
    title: "CEP",
    placeholder: "Ex: 56310-3310",
  },


  {
    inputType: "text",
    name: "municipio",
    title: "Município",
    placeholder: "Ex: Petrolina",
  },

  {
    inputType: "text",
    name: "ponto",
    title: "Ponto de referência",
    placeholder: "Ex: Mercado,Praça,Loja",
  },


  {
    inputType: "text",
    name: "horaFato",
    title: "Hora do fato",
    placeholder: "Ex: 20:20",
  },
  {
    inputType: "text",
    name: "horaRegistro",
    title: "Hora do registro",
    placeholder: "Ex: 10:20",
  },

  {
    inputType: "text",
    name: "dataFato",
    title: "Data do fato",
    placeholder: "DATA DO FATO",
  },

  {
    inputType: "text",
    name: "pagina",
    title: "Quantidade de Paginas",
    placeholder: "EX : 4 ",
  },
 

  /**Dados Pessoais da vitima */
];

export const personSchema = [
  [
    {
      inputType: "text",
      name: "tipo",
      title: "Tipo Envolvido",
      placeholder: "Ex: Vitima,Imputado,Testemunha",
    },


    {
      inputType: "text",
      name: "nome",
      title: "Nome",
      placeholder: "Nome Completo",
    },
    {
      inputType: "text",
      name: "sexo",
      title: "Sexo",
      placeholder: "Ex: Masculino",
    },

    {
      inputType: "text",
      name: "pai",
      title: "PAI",
      placeholder: "Nome do Pai",
    },

    {
      inputType: "text",
      name: "mae",
      title: "Mãe",
      placeholder: "Nome da Mãe",
    },

    {
      inputType: "text",
      name: "nascimento",
      title: "Data de Nascimento",
      placeholder: "Ex 10/05/1995",
    },
    {
      inputType: "text",
      name: "naturalidade",
      title: "Naturalidade",
      placeholder: "Ex: Petrolina",
    },
    {
      inputType: "text",
      name: "rg",
      title: "RG",
      placeholder: "EX: 8145376 SDS",
    },
    {
      inputType: "text",
      name: "cpf",
      title: "CPF",
      placeholder: "Ex: 104.898.843-98",
    },

    {
      inputType: "text",
      name: "endereco",
      title: "ENDEREÇO",
      placeholder: "Ex: rua Araripina N 10, Centro",
    },
  ],
];

export const objetosSchema = [
  [
    {
      inputType: "text",
      name: "tipo",
      title: "Tipo Objeto",
      placeholder: "Ex: Arma de Fogo, Calibre 12 ...",
    },

    {
      inputType: "text",
      name: "modelo",
      title: "Marca / Modelo",
      placeholder: "Ex: Apple, Iphone ",
      required: false,
    },

    {
      inputType: "text",
      name: "nserie",
      title: "Número de série",
      placeholder: "Ex: 123484",
    },


    

    {
      inputType: "text",
      name: "motivo",
      title: "Motivo do registro do objeto ?",
      placeholder: "Qual o motivo do registro do objeto ?",
    },

    {
      inputType: "text",
      name: "qtd_objeto",
      title: "Quantidade Objeto",
      placeholder: "Ex: 2 kg",
    },

    {
      inputType: "text",
      name: "vlr_objeto",
      title: "Valor objeto",
      placeholder: "Valor do objeto",
    },

    {
      inputType: "text",
      name: "envolvido",
      title: "Envolvido",
      placeholder: "Envolvido 1 ",
    },
  ],
];

export const veiculoSchema = [
  [
    {
      inputType: "text",
      name: "cor",
      title: "Cor",
      placeholder: "Ex: Preto",
      required: false,
    },

    {
      inputType: "text",
      name: "marca",
      title: "Marca",
      placeholder: "Ex: GOl",
      required: false,
    },

    {
      inputType: "text",
      name: "ano",
      title: "Ano",
      placeholder: "Ano",
    },

    {
      inputType: "text",
      name: "renavam",
      title: "Renavam",
      placeholder: "Renavam",
    },

    {
      inputType: "text",
      name: "placa",
      title: "Placa",
      placeholder: "Placa",
    },

    {
      inputType: "text",
      name: "chassi",
      title: "Chassi",
      placeholder: "Chassi",
    },

    {
      inputType: "text",
      name: "uf",
      title: "UF",
      placeholder: "UF",
    },
    {
      inputType: "text",
      name: "envolvido",
      title: "Envolvido",
      placeholder: "Envolvido 1 ",
    },
  ],
];

export const historicoSchema = [
  [
    {
      inputType: "textLongo",
      name: "historico",
      title: "Dados Complementares",
      placeholder: "Descrição do fato",
    },
  ],
];
