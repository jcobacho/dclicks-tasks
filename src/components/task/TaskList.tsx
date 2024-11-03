// import * as React from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { TaskType, useGetAllTasksQuery } from "./TaskSlice";


export default function TaskList() {

  const {data, isFetching} = useGetAllTasksQuery();

  return (
    <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
      {!isFetching && data?.map((item: TaskType) => {
        return (
          <ListItem
            key={item.id}
            secondaryAction={
              <Checkbox
                edge="end"
                inputProps={{ "aria-labelledby": item.title }}
              />
            }
          >
            <ListItemText primary={item.title} />
          </ListItem>
        );
      })}
    </List>
  );
}
