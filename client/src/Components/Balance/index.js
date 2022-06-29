import React,{useState,useEffect} from 'react';
import CrudTable from '../CrudTable/CrudTable'
import MyModal from '../Modal/index'

import {Button, Container,Row,Col} from 'react-bootstrap';

export default function Balance({egresos,ingresos,total}){
    let [click,setClick] = useState('')
    const [show, setShow] = useState(false);

    let handleEdit = (e) =>{
        setClick(e.target.id)
        setShow(true)
    }

    const handleShow = () => setShow(true);

    console.log(click)
    return(
        <Container>
            <h2 style={{textAlign: 'center'}} >Balance Actual</h2>
            {
                Math.sign(total) === -1
                ? <h3 style={{textAlign: 'center', color:'red'}}>{total}</h3>
                : <h3 style={{textAlign: 'center', color:'green'}}>{total}</h3>
            }

            <Row className="justify-content-md-center">
                <Col md="auto">
                <Button  className="nextButton" onClick={handleEdit} id="ingresos" style={{marginRight:'.5rem'}}>Ver solo ingresos</Button >
                <Button  className="nextButton" onClick={handleEdit} id="egresos">Ver solo egresos</Button >
                </Col>
                <br/><br/><br/><br/>
            </Row>
            {click === 'ingresos'
            ? <MyModal data={ingresos} action={click} setShow={setShow} show={show} handleShow={handleShow}/>
             : click === "egresos" 
              ? <MyModal data={egresos} action={click} setShow={setShow} show={show} handleShow={handleShow}/>
               : console.log('Invalid expression')}
        </Container>
    )
}