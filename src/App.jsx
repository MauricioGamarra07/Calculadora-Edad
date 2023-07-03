import { useState } from 'react'
import './App.css'
import Resultado from './assets/components/Resultado';

function App() {
  
  const fecha = new Date();

  let diaAct = fecha.getDate();
  /* console.log("Día Actual: " + diaAct); */
  let mesAct = fecha.getMonth() + 1;
  /* console.log("Mes Actual: " + mesAct); */
  let anioAct = fecha.getFullYear();
  /* console.log("Año Actual: " + anioAct); */

  const [dia, setDia] = useState();
  const [mes, setMes] = useState();
  const [anio, setAnio] = useState();

  const numeros = document.querySelectorAll("#num");
  const textos = document.getElementsByTagName("p");
  const inputs = document.getElementsByTagName("input");
  const spans = document.getElementsByTagName("span");


  function validarDia() {
    let datoDia = false;
    if (dia=="" || dia==" " || dia==null || dia==undefined){
      agregarError(0);
      spans[0].innerHTML = "This field is required";
    }
    else if(dia<1 || dia>31){
      agregarError(0);
      spans[0].innerHTML = "Must be a valid day";
    }
    else{
      quitarError(0);
      spans[0].innerHTML = "";
      datoDia = true;
    }
    /* console.log(datoDia); */
    return datoDia;
  }

  function validarMes() {
    let datoMes = false;
    if (mes=="" || mes==" " || mes==null || mes==undefined){
      agregarError(1);
      spans[1].innerHTML = "This field is required";
    }
    else if(mes<1 || mes>12){
      agregarError(1);
      spans[1].innerHTML = "Must be a valid day";
    }
    else{
      quitarError(1);
      spans[1].innerHTML = "";
      datoMes = true;
    }
    /* console.log(datoMes); */
    return datoMes;
  }

  function validarAnio() {
    let datoAnio = false;
    if (anio=="" || anio==" " || anio==null || anio==undefined){
      agregarError(2);
      spans[2].innerHTML = "This field is required";
    }
    else if(anio<1 || anio>anioAct){
      agregarError(2);
      spans[2].innerHTML = "Must be a valid day";
    }
    else{
      quitarError(2);
      spans[2].innerHTML = "";
      datoAnio = true;
    }
    /* console.log(datoAnio); */
    return datoAnio;
  }


  function agregarError(num){
    textos[num].classList.add("rojo");
    inputs[num].classList.add("rojo");
  }

  function quitarError(num){
    textos[num].classList.remove("rojo");
    inputs[num].classList.remove("rojo");
  }


  function calcularEdad() {

    let subAnio = anioAct - anio;
    let anioEdad = 0;
    let mesEdad = 0;
    let diaEdad = 0;

    if (anio < anioAct && anio > 0) {
      if (mes > mesAct) {
        anioEdad = subAnio - 1;
        mesEdad = 12 - (mes - mesAct);
        if (dia > diaAct) {
          mesEdad = mesEdad - 1;
          diaEdad = 30 - (dia - diaAct);
        } else if (dia == diaAct) {
          diaEdad = 0;
        } else {
          diaEdad = diaAct - dia;
        }
      }
      else if (mes == mesAct) {
        if (dia > diaAct) {
          anioEdad = subAnio - 1;
          mesEdad = 11;
          diaEdad = 30 - (dia - diaAct);
        } else if (dia == diaAct) {
          anioEdad = subAnio;
          mesEdad = 0;
          diaEdad = 0;
        } else {
          anioEdad = subAnio;
          mesEdad = 0;
          diaEdad = diaAct - dia;
        }
      }
      else {
        if (dia > diaAct) {
          anioEdad = subAnio;
          mesEdad = (mesAct - mes) - 1;
          diaEdad = 30 - (dia - diaAct);
        } else if (dia == diaAct) {
          anioEdad = subAnio;
          mesEdad = mesAct - mes;
          diaEdad = 0;
        } else {
          anioEdad = subAnio;
          mesEdad = mesAct - mes;
          diaEdad = diaAct - dia;
        }
      }
    }

    else if (anioAct == anio) {
      anioEdad = subAnio;
      if (mes > mesAct) {
        console.log("Mes mayor al actual");
      }
      else if (mes == mesAct) {
        if (dia > diaAct) {
          console.log("Día mayor al actual");
        } else if (dia == diaAct) {
          console.log("Recién nació");
        } else {
          anioEdad = 0;
          mesEdad = 0;
          diaEdad = diaAct - dia;
        }
      }
      else {
        if (dia > diaAct) {
          mesEdad = (mesAct - mes) - 1;
          diaEdad = 30 - (dia - diaAct);
        } else if (dia == diaAct) {
          mesEdad = mesAct - mes;
          diaEdad = 0;
        } else {
          anioEdad = subAnio;
          mesEdad = mesAct - mes;
          diaEdad = diaAct - dia;
        }
      }
    }

    console.log(anioEdad);
    console.log(mesEdad);
    console.log(diaEdad);

    numeros[0].innerHTML = anioEdad;
    numeros[1].innerHTML = mesEdad;
    numeros[2].innerHTML = diaEdad;

    /* alert(`Tienes ${anioEdad} años, ${mesEdad} meses y ${diaEdad} días de edad`); */
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
            <span></span>
          </div>
          <div className="caja-month">
            <p>MONTH</p>
            <input type="text" id='month' placeholder='MM' onChange={(e) => {
              /* console.log(e.target.value); */
              setMes(e.target.value);
            }} />
            <span></span>
          </div>
          <div className="caja-year">
            <p>YEAR</p>
            <input type="text" id='year' placeholder='YYYY' onChange={(e) => {
              /* console.log(e.target.value); */
              setAnio(e.target.value);
            }} />
            <span></span>
          </div>
        </div>
        <div className="cont-medio">
          <div className="linea"></div>
          <i className='bx bxs-chevrons-down bx-lg flecha' onClick={() => {
            /* console.log(dia);
            console.log(mes);
            console.log(anio); */
            validarDia();
            validarMes();
            validarAnio();
            /* calcularEdad(); */
            if (validarDia()==true && validarMes()==true && validarAnio()==true){
              calcularEdad();
            }
          }}></i>
        </div>
        <Resultado />
      </div>
    </div>
  )
}

export default App
