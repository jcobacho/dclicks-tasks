// import * as React from 'react';
import List from "@mui/material/List";
import { TaskType, useGetAllTasksQuery } from "./TaskSlice";
import { useAppSelector } from "../../store";
import TaskItem from "./TaskItem";


export default function TaskList() {

  const {isFetching} = useGetAllTasksQuery();

  const tasks = useAppSelector((state) => state.task);

  return (
    <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
      {!isFetching && tasks?.map((item: TaskType) => {
        return (
          <TaskItem item={item}/>
        );
      })}
    </List>
  );
}
