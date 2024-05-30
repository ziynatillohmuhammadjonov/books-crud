import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Colors, FontSizes } from "../shared/tokens";
import { iBook } from "../hooks/requests/addNewBook";

interface iProps {
  data: iBook;
}

function CardItemSearch({ data }: iProps) {
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
          {data.book.author}
        </Typography>
        <img
          src={data.book.cover}
          style={{ width: "200px", marginTop: "20px", marginBottom: "20px" }}
        />
        <Typography
          fontSize={FontSizes.contentSize}
          lineHeight={FontSizes.contentSizeHeight}
          color={Colors.gray}
          fontFamily="Mulish"
          textAlign={"left"}
        >
          ISBN code: &nbsp; {data.book.isbn}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>
          {data.book.author}: {data.book.published}-year
        </Typography>
      </CardActions>
    </Card>
  );
}

export default CardItemSearch;
