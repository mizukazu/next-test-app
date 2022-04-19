import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AlertDialog from '../components/Dialog';
import { Card, CardActions, CardContent, Typography  } from '@mui/material';
import { Stack  } from '@mui/material';
import { Breadcrumbs, Link  } from '@mui/material';
import ToTop from '../components/ToTop';

export default function TestPage() {

  return (
    <Container>
      <h1>テストページ</h1>
      { ToTop() }
      <div>{ CountComponent() }</div>
      <div>{ AlertDialog() }</div>
      <div className='mt-5'>
        <h2>カードテスト</h2>
        { BasicCard() }
      </div>
      <div className='mt-5'>
        <h2>スタックテスト</h2>
        { BasicStack() }
      </div>
      <div className='mt-5'>
        <h2>パンくずテスト</h2>
        { BasicBreadcrumbs() }
      </div>
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

function BasicCard() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography variant="h5" className="mb-2">吾輩は猫である</Typography>
        <Typography sx={{ fontSize: 14 }} className="mb-2">
          吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。<br />
          何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。<br />
          吾輩はここで始めて人間というものを見た。
        </Typography>
        <Typography sx={{ fontSize: 12 }}>
          吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。<br />
          何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。<br />
          吾輩はここで始めて人間というものを見た。
        </Typography>
      </CardContent>
    </Card>
  )
}

function BasicStack() {
  return (
    <Stack spacing={2}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  )
}

function BasicBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        MUI
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        Core
      </Link>
      <Typography color="text.primary">Breadcrumbs</Typography>
    </Breadcrumbs>
  )
}