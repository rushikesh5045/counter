import { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [val, setVal] = useState(0);
  const [col, setCol] = useState('black');

  const update = () => {
    setVal((prevVal) => prevVal + 1);
  };

  const dec = () => {
    setVal((prevVal) => prevVal - 1);
  };

  const reset = () => {
    setVal(0);
    setCol('black');
  };

  const updateColor = useCallback(() => {
    if (val > 0 ) {
      setCol('green');
    } else if (val < 0) {
      setCol('#6d1010');
    } else {
      setCol('black');
    }
  }, [val]);

  useEffect(() => {
    updateColor();
  }, [val, updateColor]);

  return (
    <div className="App">
      <h1 className="h" style={{ color: col }}>
        {val}
      </h1>
      <div className="btns">
        <button className="in" onClick={update}>
          Increase
        </button>
        <button className="re" onClick={reset}>
          Reset
        </button>
        <button className="de" onClick={dec}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
