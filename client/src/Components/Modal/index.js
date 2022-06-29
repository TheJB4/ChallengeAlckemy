import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button,Table} from 'react-bootstrap';
import CrudTableRow from "../CrudTable/CrudTableRow";

export default function MyModal({data,action,setShow,show,handleShow}) {
    const handleClose = () => setShow(false);

    console.log(data)
    return (
      <>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{action}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Table>
                    <thead>
                        <tr>
                            <th>Concepto</th>
                            <th>Monto</th>
                            <th>Fecha</th>
                            <th>Tipo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.length === 0 
                    ? <tr><td colSpan={3}>No hay datos</td></tr> 
                    : data.map((el)=> {
                        return <CrudTableRow key={el.id} el={el}/>
                    })}
                    </tbody>
                </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}