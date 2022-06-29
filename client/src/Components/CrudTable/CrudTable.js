import React,{useState,useEffect} from 'react'
import CrudTableRow from './CrudTableRow'
import Balance from '../Balance/index'
import CrudForm from './CrudForm'

import { Container, Row,Col, Table } from 'react-bootstrap'

export default function CrudTable({data,setData}) {


let total = (type) =>{
  if(type==="ingresos"){
    const dataTemp = ingresos.map(e => e.amount);
    let total = dataTemp.reduce((acumulator,el) => acumulator + el,0)

    return total
  }else if(type==="egresos"){
    const dataTemp = egresos.map(e => e.amount);
    let total = dataTemp.reduce((acumulator,el) => acumulator + el,0)
    return total
  }
}

  
  const [balance, setBalance] = useState([])
  const [ingresos, setIngresos] = useState([])
  const [egresos, setEgresos] = useState([])

  useEffect(()=>{
    setIngresos(data.filter(e => e.type === "ingreso"))
    setEgresos(data.filter(e => e.type === "egreso"))
  },[data])

  useEffect(()=>{
    //let balanceActual = () =>{
      //const dataTemp = data.map(e => e.amount);
      //setBalance(dataTemp);
   // }

    let totalBalance = total("ingresos") - total("egresos")
    setBalance(totalBalance)
    //balanceActual()
  },[data])
  
  return (
    <Container>
        <Row className="justify-content-md-center">
          <Col xs md="auto">
          <CrudForm/>
            <h2 style={{textAlign: 'center'}}>Datos</h2>
            <Table responsive>
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
                    return <CrudTableRow key={el.id} el={el} setData={setData}/>
                  })}
                </tbody>
            </Table>
            <Balance total={balance} ingresos={ingresos} egresos={egresos} setData={setData}/>
          </Col>
        </Row>
    </Container>
  )
}
