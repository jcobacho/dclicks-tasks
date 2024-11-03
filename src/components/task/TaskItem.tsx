import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  Stack
} from "@mui/material";
import { TaskType } from "./TaskSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../store";
import { toggleCompleteTask } from "./TaskSlice";

function TaskItem({
  item,
  setOpen,
  setToDelete
}: {
  item: TaskType;
  setOpen: Function;
  setToDelete: Function;
}) {
  const dispatch = useAppDispatch();

  const handleClickOpen = () => {
    setToDelete(item.id);
    setOpen(true);
  };

  function HandleToggle() {
    dispatch(toggleCompleteTask({ id: item.id }));
  }

  return (
    <ListItem
      secondaryAction={
        <Stack direction="row">
          <Checkbox
            edge="start"
            inputProps={{ "aria-labelledby": item.title }}
            checked={item.completed}
            onChange={HandleToggle}
          />

          <IconButton aria-label="delete" onClick={handleClickOpen}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      }
    >
      <ListItemText
        primary={item.title}
        style={{ wordBreak: "break-all" }}
        primaryTypographyProps={{ fontSize: "22px", paddingRight: 8 }}
      />
    </ListItem>
  );
}

export default TaskItem;
