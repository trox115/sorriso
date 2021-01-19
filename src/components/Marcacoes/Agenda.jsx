import React, {useEffect, useState,} from 'react'
import { ReactAgenda , ReactAgendaCtrl , guid ,  Modal } from 'react-agenda';
import _ from 'lodash';
require('moment/locale/pt.js');
var colors= {
  'color-1':"rgba(102, 195, 131 , 1)" ,
  "color-2":"rgba(242, 177, 52, 1)" ,
  "color-3":"rgba(235, 85, 59, 1)"
}

var now = new Date();



export default function Agenda() {
  const [items, setItems] = useState([
    {
     _id            :guid(),
      name          : 'Meeting , dev staff!',
      startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0),
      endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0),
      classes       : 'color-1'
    },
    {
     _id            :guid(),
      name          : 'Working lunch , Holly',
      startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 11, 0),
      endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 13, 0),
      classes       : 'color-2 color-3'
    },
  
  ])
  const [newItems, setNew] = useState([
    {
     _id            :guid(),
      name          : 'Meeting , dev staff!',
      startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0),
      endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0),
      classes       : 'color-1'
    },
    {
     _id            :guid(),
      name          : 'Working lunch , Holly',
      startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 11, 0),
      endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 13, 0),
      classes       : 'color-2'
    },
  
  ])
  const [showModal, setModal] = useState(false)
  const [selected, setSelected] = useState();
  useEffect(() => {
    if(!_.isEqual(JSON.stringify(newItems), JSON.stringify(items)) ){
      setItems(newItems);
    }
  }, [items,newItems,setItems])


  const handleCellSelection = () =>(e) =>{
    
    if(selected  && selected[0] === e ){
      setModal(true)
    }
    setSelected([e]);
  }

  const handleRangeSelection = () =>(e) =>{
    setModal(true)
    setSelected(e);
  }

  const editEvent = (items) => (e) =>{
    console.log(items)

    setModal(false);
    setSelected([]);
    setNew(items)
    closeModal();
  }

  const handleItemEdit= () =>(e) =>{
    if(e){
      setSelected([e])
      return openModal();
    }
  }
 

  const mudar= (itens) => (e) => {
    //console.log(JSON.parse(JSON.stringify(itens)))
   setNew(JSON.parse(JSON.stringify(itens)))
  }

  const closeModal = () =>(e) => {
    if(e){
      e.stopPropagation();
      e.preventDefault();
    }
    setModal(false);
  }

 const addNewEvent = (items , newItems) => (e)=>{
    setModal(false);
    setSelected([])
    setNew(e);
    console.log(e)
    closeModal();
  }
  

  const openModal = () => {
    setModal(true);
  }
  
  return (
    <>
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Agenda</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
              <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li><a className="parent-item" href="">Apps</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Agenda</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 col-sm-12">
            <div className="card-box">
              <div className="card-head">
                <header>Agenda</header>
              </div>
              <div className="card-body ">
                <div className="panel-body">
                <ReactAgenda
          minDate={now}
          maxDate={new Date(now.getFullYear(), now.getMonth()+3)}
          disablePrevButton={false}
          startDate={new Date()}
          cellHeight={60}
          locale={'pt_br'}
          items={items}
          numberOfDays={5}
          rowsPerHour={2}
          itemColors={colors}
          autoScale={false}
          fixedHeader={true}
          onItemEdit={ handleItemEdit()}
          onCellSelect={handleCellSelection()}
          onRangeSelection={handleRangeSelection()}
          onChangeEvent	= {mudar(items)}
          />
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
    {
      showModal? <Modal clickOutside={closeModal} >
          <div className="modal-content">
             <ReactAgendaCtrl items={items} itemColors={colors}  selectedCells={selected} edit={editEvent()} Addnew={addNewEvent()} />

          </div>
   </Modal>:''
}
   </>
  )
}
