import Container from '@mui/material/Container';
import { Alert, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import ToTop from '../components/ToTop';
import useSWR from 'swr';
import { useQuery, QueryCache, ReactQueryCacheProvider, useQueryClient } from 'react-query';

export default function Api() {
  const queryCache = new QueryCache();
  return (
    // <ReactQueryCacheProvider queryQache={queryCache}>
      <Container>
        <h1>APIテストページ</h1>
        <ToTop></ToTop>
        <div className="mt-3">
          <GetAPI></GetAPI>
          {/* <Button variant="contained" onClick={GetAPI}>GET</Button> */}
        </div>
      </Container>
    // </ReactQueryCacheProvider>
  )
}

function GetAPI() {
  const { data, error } = useSWR('/api/sample', (ep) => fetch(ep).then(res => res.json()));
  console.log(data);
  if(error) return <Alert severity="error">エラーが発生しました。</Alert>
  if(!data) {
    return (
      <>
        Loading...
        <CircularProgress />
      </>
    )
  }
  const dom = data.map(d => {{ <div>{d.name}</div> }});
  return <div data={data}>Hello { data[0].name }</div>
}

function ReactQueryFetch() {
  const { data, isLoading, isError } = useQuery('/api/sample', (ep) => console.log(ep));
}