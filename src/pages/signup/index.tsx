import { Box } from "@mui/material";
import SignUp from "../../components/SignUp";

function index() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SignUp />
    </Box>
  );
}

export default index;
