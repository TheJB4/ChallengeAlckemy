import PeticionFetch from './Components/peticionFetch'
import MyHome from './Components/Home/index.js'
import FormEdit from './Components/FormEdit/index.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PeticionFetch/>}>Home</Route > 
        <Route exact path="/home" element={<MyHome/>}>Home</Route >
        <Route exact path="/FormEdit" element={<FormEdit/>}>Home</Route >
      </Routes>
    </BrowserRouter>
  );
}