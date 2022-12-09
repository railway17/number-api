import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [result, setResult] = useState(0);
  const onChange = (type, value) => {
    if (type === 'num1') {
      setNum1(value);
    } else {
      setNum2(value);
    }

  }

  const onSave = () => {
    const url = 'http://localhost:5000/add'
    axios.post(url, {
      data: {
        num1,
        num2
      }
    }).then((res) => {
      setIsSaved(true);
      setResult(res.data.result);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        
        <div style={{visibility: isSaved ? 'visible' : 'hidden'}}>
          Saved result {result}
        </div>
        <div>
          <input value={num1} onChange={(e)=> onChange('num1', e.target.value)} />
          <input value={num2} onChange={(e)=> onChange('num2', e.target.value)} />
        </div>
      </div>
      <div>
        <button onClick={onSave}>save</button>
      </div>
    </div>
  );
}

export default App;
