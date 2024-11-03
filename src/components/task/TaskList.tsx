// import * as React from 'react';
import List from "@mui/material/List";
import { TaskType, useGetAllTasksQuery } from "./TaskSlice";
import { useAppSelector } from "../../store";
import TaskItem from "./TaskItem";
import DeleteTaskDialog from "./DeleteTaskDialog";
import { useState } from "react";

export default function TaskList() {
  const [toDelete, setToDelete] = useState(0)
  const [open, setOpen] = useState(false);

  const { isFetching } = useGetAllTasksQuery();

  const tasks = useAppSelector(state => state.task);

  return (
    <>
      <DeleteTaskDialog open={open} setOpen={setOpen} toDelete={toDelete}/>

      <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
        {!isFetching &&
          tasks?.map((item: TaskType) => {
            return <TaskItem key={item.id} item={item} setOpen={setOpen} setToDelete={setToDelete}/>;
          })}
      </List>
    </>
  );
}
