import React, { useEffect, useState } from 'react';
import { connect, } from 'react-redux';
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
      console.log(consultas.consultas)
      const filtered = _.filter(consultas.consultas, {
        cliente: {id:props.id.id}
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
            <Link
                to={{
                  pathname: '/detalhes',
                  query: {
                    consulta,
                  },
                }}
              >
                {consulta.cliente.nome}
              </Link>
            </td>
            <td className="center">
            <Link
                to={{
                  pathname: '/detalhes',
                  query: {
                    consulta,
                  },
                }}
              >{getReadDate(consulta?.created_at)}</Link>
            </td>
            <td className="center">
              <Link
                to={{
                  pathname: '/detalhes',
                  query: {
                    consulta,
                  },
                }}
              >
                {consulta.tratamentos.length}
              </Link>
            </td>
            <td className="center">
              <Link
                to={{
                  pathname: '/detalhes',
                  query: {
                    consulta,
                  },
                }}
              >
                {consulta.custo} €
              </Link>
            </td>
            <td className="center">
              { consulta.pagamento === 0 ?
              (
                <span className="label label-sm label-danger">Não Pago</span>
              ) : consulta.pagamento === consulta.custo ?
                 (
                <span className="label label-sm label-success">Pago</span>
              ) : (
                <span className="label label-sm label-warning">
                  {`Parcialmente pago ${ consulta.custo - consulta.pagamento} €`}
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
