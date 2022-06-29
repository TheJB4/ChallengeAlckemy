# ChallengeAlckemy

#Para comenzar:
{
  1)NPM START EN CADA CARPETA. ENTRAR EN CADA UNA Y REALIZAR NPM INSTALL
  2)La app trabaja con proxys para poder utilizar peticiones con EL API en desarrollo.
  3)Iniciar el servidor: 
    (npm run dev)
  4) Iniciar Cliente: 
    (npm start)
  5)Crear una base de datos en SQL llamada: challenge1
  6)Descomentar las lineas marcadas como comentario en el archivo index.js de la carpeta API. (ASi poder crear las tablas correspondientes de la base de datos)
  7) Al crear un nuevo usuario debemos pasarle 2 arrays en blanco.(Esto es porque tuve un error de logica que aun no pude solucionar.)
  {(data.length === 0) ? <CrudTable data={[]} setData={setData}/> : <CrudTable data={[]} setData={setData}/>}
  
  8)Una vez creado las operaciones debemos pasarle el objeto data:
  {(data.length === 0) ? <CrudTable data={[]} setData={setData}/> : <CrudTable data={data} setData={setData}/>}
  9)Una vez seguido todos los pasos anteriores. no deberiamos tener problemas probando la app. :3
}
