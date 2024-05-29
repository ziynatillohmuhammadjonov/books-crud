import {
  Box,
  Button,
  IconButton,
  InputLabel,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import CloseIcon from "../assets/icon/CloseIcon";
import useAddNewBookWithIsbn, {
  iBookIsbn,
} from "../hooks/requests/addNewBookWithIsbn";
import { Colors, FontSizes } from "../shared/tokens";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "24px 28px",
  borderRadius: "12px",
};

interface iProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function BookAddModalIsbn({ openModal, setOpenModal }: iProps) {
  const { reset, register, handleSubmit } = useForm<iBookIsbn>();
  const { mutate, isSuccess } = useAddNewBookWithIsbn();
  const onSubmit: SubmitHandler<iBookIsbn> = (formData) => {
    mutate(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      setOpenModal(false);
    }
  }, [isSuccess, reset, setOpenModal]);

  return (
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component={"form"} onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "28px",
          }}
        >
          <Typography
            fontFamily="Mulish"
            color={Colors.gray}
            fontSize={FontSizes.headingSmall}
            lineHeight={FontSizes.headingSmalHeight}
            fontWeight={"600"}
          >
            Create a book
          </Typography>
          <IconButton aria-label="close" onClick={() => setOpenModal(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <InputLabel>
            <Typography
              textAlign="left"
              color={Colors.gray}
              fontWeight="500"
              fontSize={FontSizes.inputTitleSize}
              lineHeight={FontSizes.inputTitleSizeHeight}
              fontFamily="Mulish"
            >
              ISBN
            </Typography>
            <TextField
              {...register("isbn", { required: true, valueAsNumber: true })}
              id="outlined-basic"
              variant="outlined"
              sx={{
                width: "100%",
                fontFamily: "Mulish",
                color: Colors.gray,
                "& .MuiOutlinedInput-input": {
                  paddingY: "16.8px",
                  paddingX: "18px",
                },
              }}
              placeholder="Enter your ISBN code"
              type="number"
            />
          </InputLabel>
        </Box>
        <Stack direction={"row"} gap={"12px"} width={"100%"}>
          <Button
            variant="outlined"
            sx={{
              paddingY: "10px",
              fontSize: FontSizes.buttonSize,
              lineHeight: FontSizes.contentSizeHeight,
              color: Colors.primary,
              textTransform: "none",
              borderColor: Colors.primaryHover,
              ":hover": {
                backgroundColor: Colors.primaryHover,
                borderColor: Colors.primaryHover,
              },
            }}
            fullWidth
            onClick={() => setOpenModal(false)}
          >
            Close
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              paddingY: "10px",
              fontSize: FontSizes.buttonSize,
              lineHeight: FontSizes.contentSizeHeight,
              color: Colors.white,
              textTransform: "none",
              backgroundColor: Colors.primary,
              borderColor: "transparent",
              ":hover": {
                color: Colors.primary,
                backgroundColor: Colors.primaryHover,
                borderColor: Colors.primaryHover,
              },
            }}
            fullWidth
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default BookAddModalIsbn;
