import React,{useState} from 'react'
import FormEdit from '../FormEdit/index'
export default function CrudTableRow({el,setData}) {

  let [edit,setEdit] = useState('')
  const [show, setShow] = useState(false);
  
  const handleShow = () => {
    setShow(true)
  };

  let {concept,amount,id,type} = el


  let handleEdit = (e) =>{
    setEdit('edit')
    setShow(true)
  }

  let handleDelete = () => {
    let confirm = window.confirm('Estas seguro que deseas eliminar esta operacion?',concept)

    if(confirm){
      fetch(`/operations/${id}`,{
        method: 'DELETE'
      }).then(res => {console.log(res,'El elemento se elimino con exito')})
    }

    window.location.reload()
  }
  return (
    <>
        <tr>
            <td >{concept}</td>
            <td>{'$'+ amount}</td>
            <td>{new Date(el.createdAt).toLocaleDateString()}</td>
            <td>{type}</td>
            <td colSpan="2">
                <button onClick={handleEdit}>Editar</button>
                <button onClick={handleDelete}>Eliminar</button>
            </td>
        </tr>
        {edit === 'edit' && <FormEdit data={el} show={show} handleShow={handleShow} setShow={setShow} setData={setData}/>}
      </>
  )
}
