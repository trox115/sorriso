import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import { Link } from 'react-router-dom';

function TabelaConsultas({
  consultas,
  users,
  getClientes,
  getConsultas,
  servicos,
  getServicos,
  ...props
}) {
  const [cons, setCons] = useState();

  useEffect(() => {
    getClientes();
    getConsultas();
    getServicos();
  }, [getClientes, getConsultas, getServicos]);

  useEffect(() => {
    if (props.id !== 'All') {
      const filtered = _.filter(consultas.consultas, {
        cliente_id: props.id.id,
      });
      setCons(filtered);
    } else {
      setCons(consultas.consultas);
    }
  }, [
    setCons,
    consultas.consultas,
    props.id,
    // consultas, getConsultas, users, getClientes, servicos, getServicos
  ]);

  function findUsersName(id) {
    const cliente = _.find(users.users, { id });
    // setCli({ cliente });
    return [cliente?.nome, cliente];
  }

  function findServico(id) {
    const servico = _.find(servicos.servicos, { id });
    return [servico?.nome, servico];
  }

  function checkPagamento(id, pagamento) {
    const servico = _.find(servicos.servicos, { id });
    const custo = servico?.custo;
    if (pagamento === 0) {
      return 'Não pago';
    } else if (pagamento < custo) {
      return custo - pagamento;
    }
    return 'pago';
  }

  function getReadDate(date) {
    const newD = moment(date).format('DD/MM/YYYY - HH:mm');
    return newD;
  }

  return (
    <tbody>
      {_.map(cons, (consulta, index) => {
        return (
          <tr className="odd gradeX" key={index}>
            <td className="user-circle-img">
              <img src="assets/img/user/user1.jpg" alt="" />
            </td>
            <td className="center">
              <Link to="/detalhes">
                {findUsersName(consulta?.cliente_id)[0]}
              </Link>
            </td>
            <td className="center">
              <Link to="/detalhes">{getReadDate(consulta?.created_at)}</Link>
            </td>
            <td className="center">
              <Link
                to={{
                  pathname: 'detalhes',
                  query: {
                    cliente: findUsersName(consulta?.cliente_id)[1],
                    consulta,
                    servico: findServico(consulta?.servico_id)[1],
                  },
                }}
              >
                {findServico(consulta?.servico_id)[0]}
              </Link>
            </td>
            <td className="center">
              {checkPagamento(consulta?.servico_id, consulta?.pagamento) ===
              'Não pago' ? (
                <span className="label label-sm label-danger">Não Pago</span>
              ) : checkPagamento(consulta?.servico_id, consulta?.pagamento) ===
                'pago' ? (
                <span className="label label-sm label-success">Pago</span>
              ) : (
                <span className="label label-sm label-warning">
                  {`Parcialmente pago ${checkPagamento(
                    consulta?.servico_id,
                    consulta?.pagamento
                  )} €`}
                </span>
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

const mapStateToProps = (state) => ({
  consultas: state.consultas,
  users: state.users,
  servicos: state.servicos,
});

const mapDispatchToProps = (dispatch) => ({
  getConsultas: () => dispatch.consultas.loadConsultas(),
  getClientes: () => dispatch.users.loadClientes(),
  getServicos: () => dispatch.servicos.loadServicos(),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabelaConsultas);
