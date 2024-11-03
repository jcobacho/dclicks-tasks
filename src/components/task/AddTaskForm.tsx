import { Divider, IconButton, InputBase, Paper, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { addTask } from "./TaskSlice";

function AddTaskForm({setPage}: {setPage: Function}) {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);

  const dispatch = useAppDispatch()

  function HandleSubmit(ev) {
    ev.preventDefault()
    if (titleError)
      return

    if (IsValid(title)){ 
      setTitleError(true)     
      return;
    }

    dispatch(addTask({id: crypto.randomUUID(), title: title.trim(), completed:false, userId: 1}))
    // clears previous values and errors
    setTitle('')
    setTitleError(false)
    // returns pager to first page to properly view created item
    setPage(1)
  }

  function IsValid(value: string){
    return (value.trim().length < 1)
  }

  function HandleOnchange(ev) {
    const value = ev.currentTarget.value.trim();
    if (ev.currentTarget.value === ''){
      setTitleError(false)
    }else{
      setTitleError(IsValid(value))

    }
    setTitle(ev.currentTarget.value)

  }

  return (
    <form
     
      onSubmit={HandleSubmit}
    >
      <TextField
      fullWidth      
      placeholder="New Task"
      value={title}
      onChange={HandleOnchange}
      error={titleError}
      helperText={titleError ? "Must provide a title for your task" : ""}
    />
      
    </form>
  );
}

export default AddTaskForm;
