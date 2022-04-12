import { useRouter } from 'next/router';

export default function Blog() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <h1>Blogページ</h1>
      <div>{slug}</div>
    </div>
  )
}