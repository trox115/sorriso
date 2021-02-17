export const apiUrls = {
  // Clientes
  clientes: '/clientes',
  editarCliente: '/clientes/:id',
  inserirCliente: '/inserirCliente',
  userInfo: '/userInfo/:id',
  // Produtos
  produtos: '/produtos',
  inserirProduto: '/inserirProduto',
  editarProduto: '/editar/produto/:id',
  // Categorias
  categorias: '/categorias',
  inserirCategoria: '/inserirCategoria',

  //Servicos
  servicos: '/servicos',
  inserirServico: '/inserirServico',

  //Consultas
  consultas: '/consultas',
  inserirConsulta: '/inserirConsulta',
  editarConsulta: '/editarConsulta/:id',
  detalhesConsulta: '/detalhesConsulta',

  //Tratamentos
  inserirTratamento: '/inserirTratamento',
  tratamentos: '/tratamentos',
  getTratamentoByUserId: '/tratamentos/cliente/:id',
  editarTratamento: '/tratamentos/:id',

  //Documentos
  docCategoria: '/docCategoria',
  inserirOrcamento: '/inserirOrcamento',
  orcamentos: '/orcamentos',
  inserirOrcamentoDetails: '/detalhesOrcamento',
  orcamento: '/orcamento/:id',
  //Dentes
  dentes: '/dentes',

  //Marcações
  inserirMarcacao: '/inserirMarcacao',
  marcacoes: '/marcacoes',
  editarMarcacao: '/editar/marcacao/:id',

  //Pagamentos
  inserirPagamento: '/inserirPagamento',

  //Videos
  videos: '/videos',
  inserirVideo: '/inserVideo',

  //Sessions
  login: '/sessions',
  logout: '/logout'
};

export const replaceUrls = (url, obj) => {
  const pattern = /:[\w]+/gi;
  return url.replace(pattern, (token) => obj[token.substr(1)] || '');
};
