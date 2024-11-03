import "./App.css";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import TaskList from "./components/task/TaskList";

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
            <TaskList />
        </Box>
      </Container>
    </>
  );
}

export default App;
