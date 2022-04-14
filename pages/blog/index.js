import { Container, Grid } from '@mui/material';
import { List, ListItem } from '@mui/material';
import ToTop from '../../components/ToTop';

export default function Blog() {
  return (
    <Container>
      <div className="title_area">
        <h2>ブログページ</h2>
        <ToTop></ToTop>
      </div>
      <Grid style={{ marginTop: 32 }} container spacing={2}>
        <Grid style={{ background: '#93c9ff' }} item xs={8}>sample</Grid>
        <Grid style={{ background: '#ff8e8e' }} item xs={4}>
          <Category></Category>
        </Grid>
      </Grid>
    </Container>
  )
}

function Category() {
  const categoryList = ['HTML', 'JavaScript', 'Vue', 'React', 'Angular'];
  return (
    <List>
      { categoryList.map(c => <ListItem key={c}>{c}</ListItem>) }
    </List>
  )
}