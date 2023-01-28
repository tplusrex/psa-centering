import React, { useState } from 'react';
import logo from './psa-logo.png';
import './App.css';

function App() {
  const [firstValue, setFirstValue] = useState(1);
  const [secondValue, setSecondValue] = useState(1);

  let percent = Math.ceil(((Math.max(firstValue, secondValue)/(firstValue + secondValue)) * 100).toFixed(2));

  return (
    <div className="App">
      <main>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Centering Calculator
          </p>
        </header>
        <form>
          <label>
            Side A <input type="number" value={firstValue} onFocus={(e) => e.target.select()} onChange={e => e.target.value ? setFirstValue(parseInt(e.target.value)) : 0} />
            <span className="percent">{(firstValue/(firstValue + secondValue) * 100).toFixed(2)}&#37;</span>
          </label>
          <label>
            Side B <input type="number" value={secondValue} onFocus={(e) => e.target.select()} onChange={e => e.target.value ? setSecondValue(parseInt(e.target.value)): 0} />
            <span className="percent">{(secondValue/(firstValue + secondValue) * 100).toFixed(2)}&#37;</span>
          </label>
        </form>
        <section>
          <h3>Grade 
            <>
              {percent >= 50 && percent <= 55 && <span>10</span>}
              {percent >= 56 && percent <= 60 && <span>9</span>}
              {percent >= 61 && percent <= 65 && <span>8</span>}
              {percent >= 66 && percent <= 70 && <span>7</span>}
              {percent >= 71 && percent <= 80 && <span>6</span>}
              {percent >= 81 && percent <= 85 && <span>5</span>}
              {percent > 85 && <span>4</span>}
            </>
          </h3>
        </section> */}
      </main>
    </div>
  );
}

export default App;
