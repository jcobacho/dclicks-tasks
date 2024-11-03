import { Checkbox, IconButton, ListItem, ListItemText, Stack } from "@mui/material";
import { TaskType } from "./TaskSlice";
import DeleteIcon from '@mui/icons-material/Delete';

function TaskItem({ item }: { item: TaskType }) {
  return (
    <ListItem
      secondaryAction={
        <Stack direction="row" spacing={1}>
          <Checkbox
            edge="start"
            inputProps={{ "aria-labelledby": item.title }}
          />

          <IconButton aria-label="delete">
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
