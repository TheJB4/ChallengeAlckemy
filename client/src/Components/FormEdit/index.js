import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';

export default function FormEdit({data,setShow,handleShow,show,setData}){
    const handleClose = () => setShow(false);

    const handleChange = (e) => {

      if(e.target.name === 'concept'){
        data.concept = e.target.value
      }
      if(e.target.name === 'amount'){
        data.amount = e.target.value
      }
    }

    let editElement = (e) =>{
      let newElement = {
          concept: data.concept,
          amount:data.amount,
          type:data.type
      }

      fetch(`/operations/${data.id}`,{
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newElement)
      })

      window.location.reload()
    }
    console.log(data)

    return (
      <>
        <Modal show={show} onHide={handleClose} backdrop='static' keyboard="False">
          <Modal.Header closeButton>
            <Modal.Title>Edit Operation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form >
                <label htmlFor="concept">Concepto</label>
                <input type="text" name="concept" id="concept" onChange={handleChange} placeholder={data.concept}/>
                <br/>
                <label htmlFor="amount">Monto</label>
                <input type="text" name="amount" id="amount"  onChange={handleChange} placeholder={data.amount}/>
                <br/>
                <label htmlFor="type">Tipo</label>
                <input type="text" name="type" id="type"  disabled value={data.type} onChange={handleChange}/>
                <br/>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={editElement}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}