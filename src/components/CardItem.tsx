import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import EditIcon from "../assets/icon/EditIcon";
import TarshIcon from "../assets/icon/TrashIcon";
import { iBook } from "../hooks/requests/addNewBook";
import useDeleteBook from "../hooks/requests/deleteBook";
import { Colors, FontSizes } from "../shared/tokens";
import BookPatchModal from "./BookPatchModal";

interface iProps {
  data: iBook;
}

function CardItem({ data }: iProps) {
  const [hover, setHover] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const deleteBooks = useDeleteBook();
  return (
    <Card
      sx={{
        maxWidth: 280,
        borderRadius: "12px",
        boxShadow: "0 4px 24px #33333314",
        padding: "32px",
        borderColor: Colors.bgCard,
        position: "relative",
        overflow: "visible",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CardContent sx={{ padding: 0, marginBottom: "8px" }}>
        <Typography
          fontSize={FontSizes.titleSize}
          lineHeight={FontSizes.titleSizeHeight}
          fontFamily={"Mulish"}
          color={Colors.gray}
          textAlign={"left"}
          fontWeight={"600"}
          marginBottom={"6px"}
        >
          {data.book?.title}
        </Typography>
        <Typography
          fontSize={FontSizes.contentSize}
          lineHeight={FontSizes.contentSizeHeight}
          color={Colors.gray}
          fontFamily="Mulish"
          textAlign={"left"}
        >
          Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque varius
          vestibulum magna in. Tortor quisque nisl congue ut tellus sem id.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>
          {" "}
          {data.book?.author}: {data.book?.published}-year
        </Typography>
        <Typography
          fontSize={FontSizes.contentSmallSizes}
          lineHeight={FontSizes.contentSmallSizesHeight}
          sx={{
            backgroundColor: Colors.primaryLight,
            color: Colors.primary,
            textTransform: "none",
            borderRadius: "15px",
            paddingX: "12px",
            paddingY: "2px",
          }}
        >
          {data.book?.pages} pages
        </Typography>
      </CardActions>
      <Stack
        sx={{
          position: "absolute",
          right: "-33px",
          top: "16px",
          opacity: hover ? 1 : 0,
        }}
        gap={"2px"}
      >
        <IconButton
          sx={{
            backgroundColor: Colors.error,
            borderRadius: "4px",
            ":hover": {
              backgroundColor: "red",
            },
          }}
          onClick={() => {
            if (typeof data.book?.id === "number") {
              deleteBooks.mutate(data.book.id);
            }
          }}
        >
          <TarshIcon />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: Colors.primary,
            borderRadius: "4px",
            ":hover": {
              backgroundColor: Colors.primaryHover,
            },
          }}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <EditIcon />
        </IconButton>
      </Stack>
      <BookPatchModal
        openModal={openModal}
        id={0}
        setOpenModal={setOpenModal}
      />
      <Typography>
        {data.book?.status === 0
          ? "New"
          : data.book?.status === 1
          ? "Reading"
          : data.book?.status === 2
          ? "Finished"
          : ""}
      </Typography>
    </Card>
  );
}

export default CardItem;
