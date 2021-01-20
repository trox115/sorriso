import React from 'react'
import SubHeader from '../SubHeader/SubHeader';

export default function verServicos() {
  return (
    <div className='page-content-wrapper'>
      <SubHeader title='Serviços' />
      <div className='page-content'>
        <div className='row'>
          <div className='col-sm-12 col-md-9 col-lg-9'>
            <div className='card card-box'>
              <div className='card-head'>
                <header>Lista de Servicos</header>
                <div className='tools'>
                  <a className='fa fa-repeat btn-color box-refresh' href='javascript:;'></a>
                  <a className='t-collapse btn-color fa fa-chevron-down' href='javascript:;'></a>
                  <a className='t-close btn-color fa fa-times' href='javascript:;'></a>
                </div>
              </div>
              <div className='card-body '>
                <div className='table-scrollable'>
                  <table
                    className='table table-hover table-checkable order-column full-width'
                    id='example4'
                  >
                    <thead>
                      <tr>
                        <th className='center'></th>
                        <th className='center'> Nome </th>
                        <th className='center'> Categoria </th>
                        <th className='center'> Editar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* { _.map(users.users, (user, index) => {
                                    return (
                                      <tr className='odd gradeX' key={index}>
                                        <td className='user-circle-img'>
                                          <img src='assets/img/user/user1.jpg' alt='' />
                                        </td>
                                        <td className='center'>{user.name}as</td>
                                        <td className='center'>{user.email}</td>
                                        <td className='center'>
                                          <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                            <i className='fa fa-pencil'></i>
                                          </a>
                                          <button className='btn btn-tbl-delete btn-xs'>
                                            <i className='fa fa-trash-o '></i>
                                          </button>
                                        </td>
                                      </tr>
                                    );
                                  })} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
