import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch } from "../../store";
import { deleteTask } from "./TaskSlice";

export default function DeleteTaskDialog({open, setOpen, toDelete}: {open: boolean, setOpen: Function, toDelete: number}) {
    const dispatch = useAppDispatch()

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    // call dispatch delete with toDelete id
    dispatch(deleteTask(toDelete))
    setOpen(false);
  };

  return (
    <React.Fragment>      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this item?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
