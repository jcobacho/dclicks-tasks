import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { addTask } from "./TaskSlice";

function AddTaskForm() {
  const [title, setTitle] = useState("");
  const taksState = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch()

  function HandleClick() {
    const value = title.trim();
    if (value.length < 2) return;

    dispatch(addTask({id: taksState.length + 1, title, completed:false, userId: 1}))
    setTitle('')

  }

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        mb: "5px",
        mt: "2rem"
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="New Task"
        inputProps={{ "aria-label": "New Task" }}
        value={title}
        onChange={e => setTitle(e.currentTarget.value)}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        color="primary"
        sx={{ p: "10px" }}
        aria-label="directions"
        onClick={HandleClick}
      >
        <AddIcon />
      </IconButton>
    </Paper>
  );
}

export default AddTaskForm;
