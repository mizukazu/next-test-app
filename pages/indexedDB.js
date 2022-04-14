import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Dexie from 'dexie';

export default function IndexedDB() {
  return (
    <Container>
      <h1>IndexedDBテストページ</h1>
      <div>
        <Button variant="contained" onClick={putDB}>データ登録</Button>
        <Button variant="contained" color="error" style={{ marginLeft: 8 }} onClick={deleteDB}>DB削除</Button>
      </div>
    </Container>
  )
}

function putDB() {
  const db = new Dexie('test');
  db.version(1).stores({
    files: 'name'
  });

  db.files.put({ name: 'apple', data: 'りんご' });
}

function deleteDB() {
  const db = new Dexie('test');
  db.delete();
}