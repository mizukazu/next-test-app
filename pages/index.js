import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from '@mui/material/Link';
import { Container, Grid } from '@mui/material';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.jsテストサイト</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.jsテストサイト
        </h1>

        <Container>
          <Grid container spacing={2} className={styles.link_area}>
            <Grid item md={3} className={styles.about_link}>
              <Link href="/test">テストページ</Link>
            </Grid>
            <Grid item md={1} className={styles.blog_link}>
              <Link href="/blog">Blog</Link>
            </Grid>
            <Grid item md={1} className={styles.blog_link}>
              <Link href="/apiTest">API</Link>
            </Grid>
            <Grid item md={3} className={styles.blog_link}>
              <Link href="/indexedDB">IndexedDB</Link>
            </Grid>
          </Grid>
        </Container>
      </main>

      <footer className={styles.footer}>
        Powered by Mizukazu
      </footer>
    </div>
  )
}
