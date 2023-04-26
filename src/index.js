import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Clock({ heading }) {
  const [time, setTime] = useState(new Date());
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  return (
    <div className="clock">
      <h1>{heading}</h1>
      <input type="text" value={text} onChange={handleTextChange} />
      {time.toLocaleTimeString()}
    </div>
  );
}

ReactDOM.render(
  <>
    <Clock heading="Hello, World!" />
    <Clock heading="Hello, React!" />
  </>,
  document.getElementById('root')
);
