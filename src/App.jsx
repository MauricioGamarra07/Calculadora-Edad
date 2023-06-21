import { useState } from 'react'
import './App.css'
import Resultado from './assets/components/Resultado';

function App() {

  const [dia, setDia] = useState(0);
  const [mes, setMes] = useState(0);
  const [anio, setAnio] = useState(0);

  function calcularEdad() {
    const fecha = new Date();

    let diaAct = fecha.getDate();
    console.log("Día Actual: " + diaAct);
    let mesAct = fecha.getMonth() + 1;
    console.log("Mes Actual: " + mesAct);
    let anioAct = fecha.getFullYear();
    console.log("Año Actual: " + anioAct);

    let subAnio = anioAct - anio;
    let anioEdad = 0;
    if(mesAct < mes){
      anioEdad = subAnio - 1;
    }else if(mesAct > mes){
      anioEdad = subAnio;
    }else if(mesAct == mes && diaAct > dia){
      anioEdad = subAnio;
    }else if(mesAct == mes && diaAct < dia){
      anioEdad = subAnio - 1;
    }
    console.log(anioEdad);
  }

  return (

    <div className="App">
      <div className="card">
        <div className="cajastexto">
          <div className="caja-day">
            <p>DAY</p>
            <input type="text" id='day' placeholder='DD' onChange={(e) => {
              /* console.log(e.target.value); */
              setDia(e.target.value);
            }} />
          </div>
          <div className="caja-month">
            <p>MONTH</p>
            <input type="text" id='month' placeholder='MM' onChange={(e) => {
              /* console.log(e.target.value); */
              setMes(e.target.value);
            }} />
          </div>
          <div className="caja-year">
            <p>YEAR</p>
            <input type="text" id='year' placeholder='YYYY' onChange={(e) => {
              /* console.log(e.target.value); */
              setAnio(e.target.value);
            }} />
          </div>
        </div>
        <div className="cont-medio">
          <div className="linea"></div>
          <i className='bx bxs-chevrons-down bx-lg flecha' onClick={() => {
            /* console.log("Hola Mundo"); */
            console.log(dia);
            console.log(mes);
            console.log(anio);
            calcularEdad();
          }}></i>
        </div>
        <Resultado/>
      </div>
    </div>
  )
}

export default App
