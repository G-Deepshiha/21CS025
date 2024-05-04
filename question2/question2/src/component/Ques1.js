import React, { useState } from 'react';
import axios from 'axios';

function Ques1() {
  const [response, setResponse] = useState(null);

  const handleRequest = async (numberId) => {
    try {
      const res = await axios.get(`http://localhost:8080/numbers/${numberId}`);
      setResponse(res.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <button onClick={() => handleRequest('p')}>Get Prime Numbers</button>
      <button onClick={() => handleRequest('f')}>Get Fibonacci Numbers</button>
      <button onClick={() => handleRequest('e')}>Get Even Numbers</button>
      <button onClick={() => handleRequest('r')}>Get Random Numbers</button>

      {response && (
        <div>
          <h2>Previous State:</h2>
          <p>{JSON.stringify(response.windowPrevState)}</p>
          <h2>Current State:</h2>
          <p>{JSON.stringify(response.windowCurrState)}</p>
          <h2>Numbers:</h2>
          <p>{JSON.stringify(response.numbers)}</p>
          <h2>Average:</h2>
          <p>{response.avg}</p>
        </div>
      )}
    </div>
  );
}

export default Ques1;
