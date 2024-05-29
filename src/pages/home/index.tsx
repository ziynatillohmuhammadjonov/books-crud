import { useNavigate } from "react-router-dom";
import { getUser } from "../../helper/userToken";
import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Colors, FontSizes } from "../../shared/tokens";
import Cards from "../../components/Cards";
import BookAddModal from "../../components/BookAddModal";

function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const token = getUser();
  useEffect(() => {
    if (!token) {
      navigate("/signup");
    }
  }, []);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <Stack>
          <Typography
            variant="h1"
            fontFamily="Mulish"
            fontSize={FontSizes.headingLarge}
            lineHeight={FontSizes.headingLargeHeight}
            fontWeight={700}
            textAlign="left"
            color={Colors.white}
          >
            You’ve got <span style={{ color: Colors.primary }}>7 book</span>
          </Typography>
          <Typography
            fontFamily="Mulish"
            fontSize={FontSizes.headingSmall}
            lineHeight={FontSizes.headingSmalHeight}
            color={Colors.white}
            textAlign="left"
          >
            Your task today
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={"24px"}>
          <TextField
            id="outlined-basic"
            placeholder="Enter your name"
            variant="outlined"
            sx={{
              width: "320px",
              backgroundColor: Colors.white,
              borderRadius: "4px",
              fontFamily: "Mulish",
              "& .MuiOutlinedInput-input": {
                paddingY: "14px",
                paddingX: "16px",
              },
            }}
          />
          <Button
            sx={{
              fontSize: FontSizes.buttonSize,
              lineHeight: FontSizes.buttomSizeHeight,
              textTransform: "none",
              backgroundColor: Colors.primary,
              ":hover": { backgroundColor: Colors.primaryHover },
            }}
            variant="contained"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            + &nbsp; Create a book
          </Button>
        </Stack>
      </Box>
      <Cards />
      <BookAddModal openModal={openModal} setOpenModal={setOpenModal} />
    </Box>
  );
}

export default Home;
