import { loremData } from './data';
import { useState, useEffect } from 'react';

function App() {
  const [lorem, setLorem] = useState();
  const [count, setCount] = useState(0);
  const [maxMsg, setMaxMsg] = useState();

  const generateLorem = () => {
    setLorem([]);
    setMaxMsg();
    let data = [];
    if (count <= 0) {
      data.push(loremData[0]);
    } else if (count <= loremData.length) {
      for (let i = 0; i < count; i++) {
        data.push(loremData[i]);
      }
    } else {
      for (let i = 0; i <= loremData.length - 1; i++) {
        data.push(loremData[i]);
        setMaxMsg(`In our database we have only ${loremData.length} paragraph`)
      }
    }
    setLorem(data);
  }

  useEffect(() => {
    generateLorem();
  }, [])

  return (
    <div className="lorem-generator">
      <a href='https://www.mrhussain.in/portfolio/' className='back-btn'>Back to Portfolio</a>
      <h1>Tired of Boring Lorem Ipsum</h1>
      <div className='input-box'>
        <span>Paragraph</span>
        <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
        <button onClick={generateLorem}>Generate</button>
      </div>
      {maxMsg && <span className='alert-box'>{maxMsg}</span>}
      {lorem ? lorem.map((lor, i) =>
        <p key={i}>
          <span className='count'>{i + 1}</span>{lor}
        </p>
      ) : <p>No data found</p>}
    </div>
  );
}

export default App;
