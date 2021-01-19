import React, {useEffect, useState,} from 'react'
import { ReactAgenda , ReactAgendaCtrl , guid ,  Modal } from 'react-agenda';
import _ from 'lodash';

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
      classes       : 'color-2 color-3'
    },
  
  ])
  useEffect(() => {
    if(!_.isEqual(JSON.stringify(newItems), JSON.stringify(items)) ){
      console.log('hey')
      setItems(newItems);
    }
  }, [items,newItems,setItems])


  const handleCellSelection = (item) =>{
    console.log('handleCellSelection',item)
  }
  const handleItemEdit= (item) =>{
    console.log('handleItemEdit', item)
  }
  const handleRangeSelection= (item) =>{
    console.log('handleRangeSelection', item)
  }

  const mudar= (itens) => (e) => {
    //console.log(JSON.parse(JSON.stringify(itens)))
   setNew(JSON.parse(JSON.stringify(itens)))
  }
  
  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Calendar</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
              <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li><a className="parent-item" href="">Apps</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Calendar</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 col-sm-12">
            <div className="card-box">
              <div className="card-head">
                <header>Calendar</header>
              </div>
              <div className="card-body ">
                <div className="panel-body">
                <ReactAgenda
          minDate={now}
          maxDate={new Date(now.getFullYear(), now.getMonth()+3)}
          disablePrevButton={false}
          startDate={new Date()}
          cellHeight={30}
          locale={'pt'}
          items={items}
          numberOfDays={4}
          rowsPerHour={2}
          itemColors={colors}
          autoScale={false}
          fixedHeader={true}
          onItemEdit={() => handleItemEdit(items)}
          onCellSelect={() => handleCellSelection(items)}
          onRangeSelection={()=>handleRangeSelection(items)}
          onChangeEvent	= {mudar(items)}
          onItemEdit = {() => console.log('edit')}
          />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="card-box">
              <div className="card-head">
                <header>Draggable Events</header>
              </div>
              <div className="card-body ">
                <div id="external-events">
                  <form className="inline-form">
                    <input type="text" value="" className="form-control" placeholder="Event Title..." id="event_title" />
                    <br />
                    <a href="javascript:;" id="event_add" className="btn deepPink-bgcolor"> Add Event </a>
                  </form>
                  <hr />
                  <div id="event_box" className="mg-bottom-10"></div>
                  <label className="rt-chkbox rt-chkbox-single rt-chkbox-outline" for="drop-remove"> remove after drop
                                    <input type="checkbox" className="group-checkable" id="drop-remove" />
                    <span></span>
                  </label>
                  <hr className="visible-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
