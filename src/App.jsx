
import './App.css'

function App() {

  return (

    <div className="App">
      <div className="card">
        <div className="cajastexto">
          <div className="caja-day">
            <label for="day">DAY</label>
            <input type="text" id='day' placeholder='DD' />
          </div>
          <div className="caja-month">
            <label for="month">MONTH</label>
            <input type="text" id='month' placeholder='MM' />
          </div>
          <div className="caja-year">
            <label for="year">YEAR</label>
            <input type="text" id='year' placeholder='YYYY' />
          </div>
        </div>
        <div className="cont-medio">
          <div className="linea"></div>
          <i className='bx bxs-chevrons-down bx-lg flecha'></i>
        </div>
        <div className="resultado">
          <div className="year">
            <h1 id='num'>--</h1>
            <h1>years</h1>
          </div>
          <div className="month">
            <h1 id='num'>--</h1>
            <h1>months</h1>
          </div>
          <div className="day">
            <h1 id='num'>--</h1>
            <h1>days</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
