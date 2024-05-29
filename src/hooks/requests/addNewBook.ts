import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Books, PREFIX } from "../../shared/api";
import mdHash from "../../helper/MdHasher";
import { getUser } from "../../helper/userToken";
import axios from "axios";
import { toast } from "react-toastify";
interface iBooksInformation {
  title: string;
  author: string;
  cover: string;
  published: string;
  pages: number;
  id: number;
  isbn: number;
  status: number;
}
export interface iBook {
  book: iBooksInformation;
  status: number;
}

const useAddNewBook = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const queryClinet = useQueryClient();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const addBook = useMutation({
    mutationFn: (data: iBook) => {
      const api = PREFIX + Books.creatBook;
      const userToken = getUser();
      const Sign = mdHash(
        "POST",
        Books.creatBook,
        data,
        userToken ? userToken.secret : ""
      );
      return axios.post(api, data, {
        headers: {
          Key: userToken?.key,
          Sign: Sign,
        },
      });
    },
    onSuccess: () => {
      toast.success("New book successfuly added.");
      queryClinet.invalidateQueries({ queryKey: ["get-all-books"] });
    },
    onError: (res) => {
      console.log(res);
      toast.error("Somethings went error.");
    },
  });
  return addBook;
};
export default useAddNewBook;
