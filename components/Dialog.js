import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions  } from '@mui/material';

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
      aria-describedby="alert-dialog-description"
      >
        <DialogTitle>テストダイアログ</DialogTitle>
        <DialogContent>
          <DialogContentText>
          吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
          吾輩はここで始めて人間というものを見た。
          しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。
          しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せら
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ dialogClose }>閉じる</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}