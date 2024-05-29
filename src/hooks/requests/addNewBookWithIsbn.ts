import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Books, PREFIX } from "../../shared/api";
import { getUser } from "../../helper/userToken";
import mdHash from "../../helper/MdHasher";
import axios from "axios";
import { toast } from "react-toastify";

export interface iBookIsbn {
  isbn: string;
}

const useAddNewBookWithIsbn = () => {
  const queryClient = useQueryClient();
  const addNewBookWithIsbn = useMutation({
    mutationFn: (data: iBookIsbn) => {
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
          Sign,
        },
      });
    },
    onSuccess: () => {
      toast.success("New Book successful added.");
      queryClient.invalidateQueries({ queryKey: ["get-all-books"] });
    },
    onError: (err) => {
      console.log(err);
      toast.error("Somethings went error");
    },
  });
  return addNewBookWithIsbn;
};
export default useAddNewBookWithIsbn;
