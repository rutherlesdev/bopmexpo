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
    title: "Tipo de Ocorrência",
    placeholder: "Ex: Furto ,Roubo ",
  },
  {
    inputType: "text",
    name: "endereco",
    title: "ENDEREÇO DA OCORRÊNCIA",
    placeholder: "Ex: Rua 10 ,N 12,Centro",
  },

  {
    inputType: "text",
    name: "dataFato",
    title: "Data do fato",
    placeholder: "DATA DO FATO",
    
  },

  /**Dados Pessoais da vitima */
];

export const personSchema = [
  [
    {
      inputType: "select",
      name: "tipo",
      title: "Tipo Envolvido",
      placeholder: "Ex: ",
      options: [
        { value: "1", label: "VÍTIMA" },
        { value: "2", label: "IMPUTADO" },
        { value: "3", label: "SUSPEITO" },
        { value: "4", label: "TESTEMUNHA" }, 
        { value: "5", label: "OUTROS" },
      
      
      ]

      
    },

    {
      inputType: "text",
      name: "nome",
      title: "Nome",
      placeholder: "Nome Completo",
      
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
      name: "tipo-objeto",
      title: "Tipo Objeto",
      placeholder: "Ex: Arma de Fogo, Calibre 12 ...",
      value: 'teste'
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
      placeholder: "Ex: 2",
      
    },

    {
      inputType: "text",
      name: "unidade_objeto",
      title: "Unidade Objeto",
      placeholder: "Ex: Kg,Unidade,Metros ...",
      
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

    {
      inputType: "text",
      name: "cor",
      title: "Cor",
      placeholder: "Cor",
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
      name: "histórico",
      title: "Histórico",
      placeholder: "Descrição do fato",
      
      multiline: true,
    },
  ],
];
