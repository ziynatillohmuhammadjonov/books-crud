import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Colors } from "../../shared/tokens";

function index() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "72px",
        flex: 1,
      }}
    >
      <img src="404-page.png" alt="404-page" />
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            maxWidth: "240px",
            backgroundColor: Colors.primary,
            color: Colors.white,
            paddingY: "10px",
            textTransform: "capitalize",
            transition: "0.5s",
            ":hover": {
              backgroundColor: Colors.primaryHover,
            },
          }}
        >
          <Link to={"/"}>
            <Typography color={Colors.white}>Go Home Page</Typography>
          </Link>
        </Button>
        <Button
          variant="outlined"
          sx={{
            maxWidth: "240px",
            borderColor: Colors.primary,
            color: Colors.white,
            paddingY: "10px",
            textTransform: "capitalize",
            transition: "0.5s",
            ":hover": {
              backgroundColor: Colors.primary,
              color: Colors.white,
            },
          }}
        >
          <Link to={"/"}>
            <Typography>Reload Page</Typography>
          </Link>
        </Button>
      </Box>
    </Box>
  );
}

export default index;
