import React,{useState} from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

let UserId = localStorage.getItem('UserId')
export default function CrudForm({el}) {
    const [form,setForm] = useState({
        UserId,
        action: 'create'
    })

    let createOperation = async (data) =>{
        try{
            let myUser = await fetch(`/operations/`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
    
            if(myUser.status === 200){
                console.log('La operacion se ha cargado con exito')
            }
        }catch(err){
            console.log(err)
        }
      }

    let handleSubmit = (e) => {
        e.preventDefault()

        //Crear la operacion:
        createOperation(form)
        window.location.reload()
        console.log(form)
        
    }

    let handleChange = (e) => {
        setForm({
            ...form,
            UserId,
            [e.target.name] : e.target.value
        })
    }

    let handleReset = (e) => {
        setForm({})
    }

  return (
    <Container>
        <Row className="justify-content-md-center">
            <Col md="auto">
                
                <form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Concepto</Form.Label>
                            <Form.Control type="text" name="concept" id="concept" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Monto</Form.Label>
                            <Form.Control type="text" name="amount" id="amount" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control type="text" name="type" id="type" onChange={handleChange}/>
                        </Form.Group>
                        <input name="create" type="submit" value="Create"/>
                        <input type="submit" value="Clear" onClick={handleReset}/>
                </form>

            
            </Col>
        </Row>
    </Container>
  )
}
