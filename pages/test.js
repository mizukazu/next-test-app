import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AlertDialog from '../components/Dialog';
import ToTop from '../components/ToTop';

export default function TestPage() {

  return (
    <Container>
      <h1>テストページ</h1>
      { ToTop() }
      <div>{ CountComponent() }</div>
      <div>{ AlertDialog() }</div>
    </Container>
  )
}

function CountComponent() {
  const [count, setCount] = React.useState(0);
  const useState = React.useState(0);
  return (
    <div>
      <h3>stateのテスト</h3>
      <p>count: {count}</p>
      <Button variant="contained" onClick={() => setCount(count + 1)} >Click!!!</Button>
      <Button variant="contained" color="warning" onClick={() => setCount(0)}  style={{ marginLeft: 16 }}>リセット</Button>
      <div style={{ marginTop: 30 }}>
        <h3>useStateの中身</h3>
        <div>{useState}</div>
      </div>
    </div>
  )
}

function RenderButton() {
  return (
    <Button variant="contained">Hello World!</Button>
  )
}