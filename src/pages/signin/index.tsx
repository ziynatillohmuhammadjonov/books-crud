import { Box } from "@mui/material";
import SignIn from "../../components/SignIn";

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
      <SignIn />
    </Box>
  );
}

export default index;
