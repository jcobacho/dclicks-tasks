import { Checkbox, IconButton, ListItem, ListItemText, Stack } from "@mui/material";
import { TaskType } from "./TaskSlice";
import DeleteIcon from '@mui/icons-material/Delete';


function TaskItem({ item, setOpen, setToDelete }: { item: TaskType, setOpen: Function, setToDelete: Function}) {

    const handleClickOpen = () => {
        setToDelete(item.id)
        setOpen(true);
    };

  return (
    <ListItem
      secondaryAction={
        <Stack direction="row" spacing={1}>
          <Checkbox
            edge="start"
            inputProps={{ "aria-labelledby": item.title }}
          />

          <IconButton aria-label="delete" onClick={handleClickOpen}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      }
    >
      <ListItemText primary={item.title} />
    </ListItem>
  );
}

export default TaskItem;
