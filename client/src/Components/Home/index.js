import React,{useState,useEffect} from 'react'
import CrudTable from '../CrudTable/CrudTable'
import { Container } from 'react-bootstrap'

export default function MyHome(){
    let [data,setData] = useState([])

    let userId = localStorage.getItem('UserId')

    useEffect(()=>{
        let getAllOperations = async() => {
            let data = await fetch(`/operations/${userId}`)
            let myOperations = await data.json()
            
            if(data.status === 404){
                setData([])
            }else{
                setData(myOperations)
            }
        }

        getAllOperations()
    },[])
    return(
        <Container>
            <h1 style={{textAlign: 'center'}}>Hola! Bienvenido {localStorage.getItem('User')}</h1>
           <CrudTable data={data} setData={setData}/>
        </Container>
    )
}
