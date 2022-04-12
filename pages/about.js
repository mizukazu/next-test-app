import React from 'react';

export default function About() {

  return (
    <div>
      <h1>Aboutページ</h1>
      <div>{CountComponent()}</div>
    </div>
  )
}

function CountComponent() {
  const [count, setCount] = React.useState(0);
  const useState = React.useState(0);
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)} >Click!!!</button>
      <div style={{ marginTop: 30 }}>
        <h3>useStateの中身</h3>
        <div>{useState}</div>
      </div>
    </div>
  )
}