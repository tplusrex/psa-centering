import React, { useState } from 'react';
import logo from './psa-logo.png';
import './App.css';

function App() {
  const [firstValue, setFirstValue] = useState(1);
  const [secondValue, setSecondValue] = useState(1);

  let percent = Math.round((Math.min(firstValue, secondValue)/(firstValue + secondValue)) * 100);

  return (
    <div className="App">
      <main>
        <header className="App-header">
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
              {percent >= 45 && <span>10</span>}
              {percent < 45 && percent >= 40 && <span>9</span>}
              {percent < 40 && percent >= 34 && <span>8</span>}
              {percent < 34 && percent >= 28 && <span>7</span>}
              {percent < 28 && percent >= 21 && <span>6</span>}
              {percent < 21 && percent >= 15 && <span>5</span>}
              {percent < 15 && <span>4</span>}
            </>
          </h3>
        </section>
      </main>
    </div>
  );
}

export default App;
