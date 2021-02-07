export const apiUrls = {
  // Clientes
  clientes: '/clientes',
  editarCliente: '/clientes/:id',
  inserirCliente: '/inserirCliente',
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

  //Tratamentos
  inserirTratamento: '/inserirTratamento',
  tratamentos: '/tratamentos',

  //Documentos
  docCategoria: '/docCategoria',
  inserirOrcamento: '/inserirOrcamento',
  orcamentos: '/orcamentos',

  //Dentes
  dentes: '/dentes',

  //Marcações
  inserirMarcacao: '/inserirMarcacao',
  marcacoes: '/marcacoes',
  editarMarcacao: '/editar/marcacao/:id',
};

export const replaceUrls = (url, obj) => {
  const pattern = /:[\w]+/gi;
  return url.replace(pattern, (token) => obj[token.substr(1)] || '');
};
