import Container from '@mui/material/Container';
import ToTop from '../components/ToTop';
import useSWR from 'swr';
import { useQuery, QueryCache, ReactQueryCacheProvider, useQueryClient } from 'react-query';

export default function Api() {
  const queryCache = new QueryCache();
  return (
    <ReactQueryCacheProvider queryQache={queryCache}>
      <Container>
        <h1>APIテストページ</h1>
        <ToTop></ToTop>
        <div>
          { ReactQueryFetch() }
        </div>
      </Container>
    </ReactQueryCacheProvider>
  )
}

function GetAPI() {
  const { data, error } = useSWR('/api/sample', (ep) => fetch(ep).then(res => res.json()));
  console.log(data);
  if(error) return <div>failed to load</div>
  if(!data) return <div>loading...</div>
  const dom = data.map(d => {{ <div>{d.name}</div> }});
  return dom
}

function ReactQueryFetch() {
  const { data, isLoading, isError } = useQuery('/api/sample', (ep) => console.log(ep));
}