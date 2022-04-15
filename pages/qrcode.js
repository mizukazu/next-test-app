import Container from '@mui/material/Container';
import ToTop from '../components/ToTop';
import QRcode from 'qrcode.react';
import { useQRCode } from 'next-qrcode';

export default function qrcode() {
  return (
    <Container>
      <h1>QRコードテストページ</h1>
      <ToTop></ToTop>
      <div>
        <h3>qrcode.react</h3>
        { QrcodeSVG() }
        <p>Qiita.comに飛びます</p>
      </div>
      <div>
      <h3>next-qrcode</h3>
        { NextQRcode() }
      </div>
    </Container>
  )
}

function QrcodeSVG() {
  const arr = ['apple', 'banana', 'grape'];
  return (
    <QRcode value={arr}></QRcode>
  )
}

function NextQRcode() {
  const { Canvas } = useQRCode();
  return (
    <Canvas
      text={'https://github.com/bunlong/next-qrcode'}
      options={{
        type: 'image/jpeg',
        quality: 0.3,
        level: 'M',
        margin: 3,
        scale: 4,
        width: 200,
        color: {
          dark: '#010599FF',
          light: '#FFBF60FF',
        },
      }}
    />
  )
}