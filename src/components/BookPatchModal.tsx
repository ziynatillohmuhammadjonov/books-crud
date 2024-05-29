import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "../assets/icon/CloseIcon";
import { Colors, FontSizes } from "../shared/tokens";
import { useEffect, useState } from "react";
import usePatchBook from "../hooks/requests/patchBook";

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
  id: number;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function BookPatchModal({ openModal, id, setOpenModal }: iProps) {
  const [status, setStatus] = useState<number>(0);
  const { mutate, isSuccess } = usePatchBook();
  useEffect(() => {
    if (isSuccess) {
      setOpenModal(false);
    }
  }, [isSuccess]);
  return (
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component={"form"}>
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
            Edit book status
          </Typography>
          <IconButton aria-label="delete" onClick={() => setOpenModal(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => setStatus(Number(e.target.value))}
            >
              <FormControlLabel
                value="0"
                control={
                  <Radio
                    sx={{
                      color: Colors.error,
                      "&.Mui-checked": {
                        color: Colors.error,
                      },
                    }}
                  />
                }
                label="New"
              />
              <FormControlLabel
                value="1"
                control={
                  <Radio
                    sx={{
                      color: Colors.warning,
                      "&.Mui-checked": {
                        color: Colors.warning,
                      },
                    }}
                  />
                }
                label="Reading"
              />
              <FormControlLabel
                value="2"
                control={
                  <Radio
                    sx={{
                      color: Colors.success,
                      "&.Mui-checked": {
                        color: Colors.success,
                      },
                    }}
                  />
                }
                label="Finished"
              />
            </RadioGroup>
          </FormControl>
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
            onClick={() => {
              setOpenModal(false);
            }}
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
            onClick={(e) => {
              e.preventDefault();
              mutate({ id, status });
            }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default BookPatchModal;
