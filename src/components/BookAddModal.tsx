import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "../assets/icon/CloseIcon";
import { Colors, FontSizes } from "../shared/tokens";
import LinkIcon from "../assets/icon/LinkIcon";
import DateIcon from "../assets/icon/DateIcon";
import { useForm, SubmitHandler } from "react-hook-form";
import useAddNewBook, {
  iBook,
  iBooksInformation,
} from "../hooks/requests/addNewBook";

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

function BookAddModal({ openModal, setOpenModal }: iProps) {
  const { register, handleSubmit } = useForm<iBooksInformation>();
  const { mutate } = useAddNewBook();
  const onSubmit: SubmitHandler<iBooksInformation> = (formData) => {
    mutate(formData);
    setOpenModal(false);
  };

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
              Title
            </Typography>
            <TextField
              {...register("title", { required: true })}
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
              placeholder="Enter your title"
            />
          </InputLabel>
          <InputLabel>
            <Typography
              textAlign="left"
              color={Colors.gray}
              fontWeight="500"
              fontSize={FontSizes.inputTitleSize}
              lineHeight={FontSizes.inputTitleSizeHeight}
              fontFamily="Mulish"
            >
              Author
            </Typography>
            <TextField
              {...register("author", { required: true })}
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
              placeholder="Enter your author"
            />
          </InputLabel>
          <InputLabel>
            <Typography
              textAlign="left"
              color={Colors.gray}
              fontWeight="500"
              fontSize={FontSizes.inputTitleSize}
              lineHeight={FontSizes.inputTitleSizeHeight}
              fontFamily="Mulish"
            >
              Cover
            </Typography>
            <TextField
              {...register("cover", { required: true })}
              id="outlined-basic"
              variant="outlined"
              sx={{
                width: "100%",
                fontFamily: "Mulish",
                color: Colors.gray,
                "& .MuiOutlinedInput-input": {
                  paddingY: "16.8px",
                  paddingX: "5px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter your cover"
            />
          </InputLabel>
          <InputLabel>
            <Typography
              textAlign="left"
              color={Colors.gray}
              fontWeight="500"
              fontSize={FontSizes.inputTitleSize}
              lineHeight={FontSizes.inputTitleSizeHeight}
              fontFamily="Mulish"
            >
              Published
            </Typography>
            <TextField
              {...register("published", { required: true })}
              id="outlined-basic"
              variant="outlined"
              sx={{
                width: "100%",
                fontFamily: "Mulish",
                color: Colors.gray,
                "& .MuiOutlinedInput-input": {
                  paddingY: "16.8px",
                  paddingX: "5px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DateIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter your published year"
            />
          </InputLabel>
          <InputLabel>
            <Typography
              textAlign="left"
              color={Colors.gray}
              fontWeight="500"
              fontSize={FontSizes.inputTitleSize}
              lineHeight={FontSizes.inputTitleSizeHeight}
              fontFamily="Mulish"
            >
              Pages
            </Typography>
            <TextField
              {...register("pages", { required: true, valueAsNumber: true })}
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
              placeholder="Enter number of pages"
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

export default BookAddModal;
