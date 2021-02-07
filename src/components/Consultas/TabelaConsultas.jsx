import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

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
    if (_.isEmpty(users.users)) {
      getClientes();
    }
    if (_.isEmpty(consultas.consultas)) {
      getConsultas();
    }

    if (_.isEmpty(servicos.servicos)) {
      getServicos();
    }

    if (props.id !== 'All') {
      const filtered = _.filter(consultas.consultas, {
        cliente_id: props.id.id,
      });
      setCons(filtered);
    } else {
      setCons(consultas.consultas);
    }
  }, [consultas, getConsultas, users, getClientes, servicos, getServicos]);

  function findUsersName(id) {
    const cliente = _.find(users.users, { id });
    return cliente?.nome;
  }

  function findServico(id) {
    const servico = _.find(servicos.servicos, { id });
    return servico?.nome;
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
            <td className="center">{findUsersName(consulta?.cliente_id)}</td>
            <td className="center">{findServico(consulta?.servico_id)}</td>
            <td className="center">{getReadDate(consulta?.created_at)}</td>
            <td className="center">
              <a href="edit_booking.html" className="btn btn-tbl-edit btn-xs">
                <i className="fa fa-pencil"></i>
              </a>
              <button className="btn btn-tbl-delete btn-xs">
                <i className="fa fa-trash-o "></i>
              </button>
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
