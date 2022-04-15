import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import ToTop from '../components/ToTop';
import QRcode from 'qrcode.react';
import { useQRCode } from 'next-qrcode';
import { QrReader } from 'react-qr-reader';

export default function qrcode() {
  return (
    <Container>
      <div>
        <h2>QRコード生成</h2>
        <ToTop></ToTop>
          <Grid container>
            <Grid item md={2}>
              <h3>qrcode.react</h3>
              { QrcodeSVG() }
              <p>Qiita.comに飛びます</p>
            </Grid>
            <Grid item md={2}>
            <h3>next-qrcode</h3>
              { NextQRcode() }
            </Grid>
          </Grid>
      </div>
      <div>
        <h2>QRコード読み取り</h2>
        { ReactQRReader() }
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

function ReactQRReader() {
  const [data, setData] = useState('No result');
  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        constraints={{
          facingMode: 'user'
        }}
        style={{ width: '100%' }}
      >
      </QrReader>
      <p>{data}</p>
    </>
  )
}