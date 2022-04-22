export default function handler(req, res) {
  const json = [
    { name: 'test', age: '20', flag: true },
    { name: 'sample', age: '32', flag: false },
    { name: 'aaaaa', age: '18', flag: false },
  ]
  // let jsonArr = [];
  // for(let i=0; i<=100000; i++) {
  //   jsonArr.push({
  //     id: i,
  //     name: `test${i}`,
  //   });
  // }
  setTimeout(() => {
    res.status(200).json(json);
  }, 3000);
}