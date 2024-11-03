import List from "@mui/material/List";
import { TaskType, useGetAllTasksQuery } from "./TaskSlice";
import { useAppSelector } from "../../store";
import TaskItem from "./TaskItem";
import DeleteTaskDialog from "./DeleteTaskDialog";
import { useState } from "react";
import { Box, CircularProgress, Pagination } from "@mui/material";

export default function TaskList({page, setPage}: {page: number, setPage: Function}) {
  const [toDelete, setToDelete] = useState(0);
  const [open, setOpen] = useState(false);
  const { isFetching } = useGetAllTasksQuery();

  const tasks = useAppSelector(state => state.task);

  const limit = 10
  const count = Math.ceil((tasks.length + 1) / limit)
  const records =  tasks.slice((page - 1) * limit, page * limit);

  function handleChange(_event: any, value: number){
    setPage(value);    
  }  

  return (
    <>
      <DeleteTaskDialog open={open} setOpen={setOpen} toDelete={toDelete} />

      {!isFetching && (<div><List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
        {
          records?.map((item: TaskType) => {
            return (
              <TaskItem
                key={item.id}
                item={item}
                setOpen={setOpen}
                setToDelete={setToDelete}
              />
            );
          })}
      </List>
      <Pagination count={count} page={page} onChange={handleChange}/>
      </div>
      )}

      {isFetching && (
        <Box padding={'10px'} display={"flex"} alignItems="center" justifyContent="center">
          <CircularProgress />
        </Box>
      )}

      
    </>
  );
}
