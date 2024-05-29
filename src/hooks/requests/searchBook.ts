import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Books, PREFIX } from "../../shared/api";
import { getUser } from "../../helper/userToken";
import mdHash from "../../helper/MdHasher";
import axios from "axios";

const useSearchBook = () => {
  const queryClient = useQueryClient();
  const searchBook = useMutation({
    mutationFn: (title: string) => {
      const api = PREFIX + Books.getByTitle(title);
      const userToken = getUser();
      const Sign = mdHash(
        "GET",
        Books.getByTitle(title),
        null,
        userToken ? userToken.secret : ""
      );
      return axios.get(api, {
        headers: {
          Key: userToken?.key,
          Sign,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-all-books-title"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return searchBook;
};
export default useSearchBook;
