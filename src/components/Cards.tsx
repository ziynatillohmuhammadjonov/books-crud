import { Box } from "@mui/material";
import CardItem from "./CardItem";
import useGetAllBooks from "../hooks/requests/getAllBooks";
import { iBook } from "../hooks/requests/addNewBook";

function Cards() {
  const { data } = useGetAllBooks();
  const newData: iBook[] = data?.data.data;
  return (
    <Box sx={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      {newData &&
        newData.map((item, idx) => {
          return <CardItem book={item} key={idx} />;
        })}
      {/* <CardItem /> */}
    </Box>
  );
}

export default Cards;
