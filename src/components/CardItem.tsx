import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Colors, FontSizes } from "../shared/tokens";
import { iBook } from "../hooks/requests/addNewBook";

interface iProps {
  book: iBook;
}

function CardItem({ book }: iProps) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        borderRadius: "12px",
        boxShadow: "0 4px 24px #33333314",
        padding: "32px",
        borderColor: Colors.bgCard,
      }}
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
          {book.title}
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
        <Typography>Eben Upton: 2012-year</Typography>
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
          {book.pages} pages
        </Typography>
      </CardActions>
    </Card>
  );
}

export default CardItem;
