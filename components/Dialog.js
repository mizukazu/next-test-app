import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';

function DialogButton() {
  return (
    <Button variant="contained" color="primary">開く</Button>
  )
}

export default function AlertDialog() {
  const [isOpen, setOpen] = React.useState(false);

  const dialogOpen = () => {
    setOpen(true);
  }

  const dialogClose = () => {
    setOpen(false);
  }

  return (
    <div style={{ marginTop: 16 }}>
      <Button onClick={ dialogOpen } variant="contained" color="secondary">開く</Button>
      <Dialog
      open={ isOpen }
      onClose={ dialogClose }
      aria-labelledby="alert-dialog-title"
      >
        <DialogTitle>テストダイアログ</DialogTitle>
        <DialogContent>test</DialogContent>
      </Dialog>
    </div>
  )
}