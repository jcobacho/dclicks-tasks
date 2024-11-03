import "./App.css";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

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
task list
        </Box>
      </Container>
    </>
  );
}

export default App;
