import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ToTop from '../components/ToTop';
import Dexie from 'dexie';

export default function IndexedDB() {
  return (
    <Container>
      <h1>IndexedDBテストページ</h1>
      <ToTop></ToTop>
      <div style={{ marginTop: 16 }}>
        <Button variant="contained" onClick={putDB}>データ登録</Button>
        <Button variant="contained" color="error" style={{ marginLeft: 8 }} onClick={deleteDB}>DB削除</Button>
      </div>
      <div style={{ marginTop: 24 }}>
        <Button variant="contained" color="secondary" onClick={showData}>データ取得</Button>
      </div>
    </Container>
  )
}

const db = new Dexie('test');

function putDB() {
  db.version(1).stores({
    files: 'name'
  });

  db.files.put({ name: 'apple', data: 'りんご' });
}

function deleteDB() {
  const db = new Dexie('test');
  db.delete();
}

async function showData() {
  const data = await db.files.toArray();
  console.log(data);
  return (
    <div>{data}</div>
  )
}