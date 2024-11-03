import "./App.css";
import {
  AppBar,
  Box,
  Container,
  Paper,
  Toolbar,
  Typography
} from "@mui/material";
import TaskList from "./components/task/TaskList";
import AddTaskForm from "./components/task/AddTaskForm";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Dclicks TODO
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <Box sx={{ height: "100vh" }}>
          <Toolbar />

          <Paper>
            <AddTaskForm setPage={setPage}/>

            <TaskList page={page} setPage={setPage}/>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default App;
