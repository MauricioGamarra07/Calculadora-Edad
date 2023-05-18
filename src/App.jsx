
import './App.css'

function App() {

  return (

    <div className="App">
      <div className="card">
        <div className="cajastexto">
          <div className="caja-day">
            <label for="day">DAY</label>
            <input type="number" id='day' />
          </div>
          <div className="caja-month">
            <label for="month">MONTH</label>
            <input type="number" id='month' />
          </div>
          <div className="caja-year">
            <label for="year">YEAR</label>
            <input type="number" id='year' />
          </div>
        </div>
        <div className="cont-medio">
          <div className="linea"></div>
          <button id='btnFlecha'>I</button>
        </div>
        <div className="resultado">
          <div className="year">

          </div>
          <div className="month">

          </div>
          <div className="day">

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
