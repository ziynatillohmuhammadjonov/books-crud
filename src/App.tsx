import { Box, Container } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//pages
import Home from "./pages/home";
import Login from "./pages/signin";
import SignUp from "./pages/signup";
import PageNotFound from "./pages/404-page";
import Navbar from "./components/Navbar";
import { Colors } from "./shared/tokens";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Box
        sx={{
          backgroundColor: Colors.bgColor,
          backgroundImage: 'url("bg-image.png")', // Ensure the path is correct
          backgroundPosition: `left top`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `65% 100%`,
          height: "100%", // Ensure the Box has a height to display the background image
          width: "100vw",
        }}
      >
        <Container maxWidth="lg">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/error" element={<PageNotFound />} />
            </Routes>
          </Router>
          <ToastContainer position="bottom-right" />
        </Container>
      </Box>
    </QueryClientProvider>
  );
}

export default App;
