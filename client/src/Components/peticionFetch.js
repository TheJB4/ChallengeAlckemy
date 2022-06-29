import React from 'react'
import LoginForm from './Form/index'


function peticionFetch() {

  let createUser = async (data) =>{
    try{
        let myUser = await fetch(`/users/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(myUser.status === 200){
            console.log('El usuario no existe, pero se ha registrado con exito')
        }
    }catch(err){
        console.log(err)
    }
  }  

  let getUser = async (data) => {
    let {email,password} = data

    try{
        let myData = await fetch(`/users/${email}`)

        if(myData.status === 404){
            createUser(data)
            //throw new Error(`El usuario no existe, pero se creo un nuevo usuario con los datos: ${data.email} ${data.password}`)
        }else{
           let myUser = await myData.json()
           
           //alert('Bienvenido ' + myUser[0].email)
           localStorage.setItem('User',myUser[0].email)
           localStorage.setItem('UserId',myUser[0].id)
           localStorage.setItem('password',password)
           window.location.href='./home'
        }

    }catch(err){
        alert(err)
    }
  }
  return (
    <div>
        <h1>Login</h1>
        <LoginForm getUser={ getUser}/>
    </div>
  )
}

export default peticionFetch