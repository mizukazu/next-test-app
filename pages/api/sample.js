export default function handler(req, res) {
  const json = [
    { name: 'test', age: '20', flag: true },
    { name: 'sample', age: '32', flag: false },
    { name: 'aaaaa', age: '18', flag: false },
  ]
  res.status(200).json(json);
}