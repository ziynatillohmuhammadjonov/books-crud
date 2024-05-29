import { useQuery } from "@tanstack/react-query";
import { Books, PREFIX } from "../../shared/api";
import mdHash from "../../helper/MdHasher";
import { getUser } from "../../helper/userToken";
import axios from "axios";

const useGetAllBooks = () => {
  const getAllBooks = useQuery({
    queryKey: ["get-all-books"],
    queryFn: () => {
      const api = PREFIX + Books.getAll;
      const userToken = getUser();
      const Sign = mdHash(
        "GET",
        Books.getAll,
        null,
        userToken ? userToken.secret : ""
      );
      return axios.get(api, { headers: { Key: userToken?.key, Sign: Sign } });
    },
  });
  return getAllBooks;
};
export default useGetAllBooks;
