import { init } from '@rematch/core';
import users from './users';
import produtos from './produtos';
import categorias from './categorias';
import servicos from './servicos';
import consultas from './consultas';
import tratamentos from './tratamentos';
import documentos from './documentos';
import dentes from './dentes';
import marcacoes from './marcacoes';
import pagamentos from './pagamentos';
import videos from './Videos';
import user from './user';
import loading from './loading';

const models = {
  users,
  produtos,
  categorias,
  servicos,
  consultas,
  tratamentos,
  documentos,
  dentes,
  marcacoes,
  pagamentos,
  videos,
  user,
  loading
};

const store = init({
  models,
});

export default store;
