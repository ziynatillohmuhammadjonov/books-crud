import { Box, CircularProgress } from "@mui/material";
import CardItem from "./CardItem";
import useGetAllBooks from "../hooks/requests/getAllBooks";
import { iBook } from "../hooks/requests/addNewBook";
import searchBook from "../store/searchBookStre";
import { useEffect, useState } from "react";
import CardItemSearch from "./CardItemSearch";

function Cards() {
  const [loading, setLoading] = useState<boolean>(false);
  const searchBooks = searchBook((state) => state.book);
  const loadingBook = searchBook((state) => state.isLoading);

  useEffect(() => {
    setLoading(loadingBook);
  }, [loadingBook]);

  const { data } = useGetAllBooks();
  const newData: iBook[] = data?.data.data;
  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ display: "flex", gap: "35px", flexWrap: "wrap" }}>
      {searchBooks.length
        ? searchBooks.map((item, idx) => (
            <CardItemSearch data={item} key={idx} />
          ))
        : newData.map((item, idx) => <CardItem data={item} key={idx} />)}
    </Box>
  );
}

export default Cards;
