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

function App() {
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
            <AddTaskForm />

            <TaskList />
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default App;
