import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Books, PREFIX } from "../../shared/api";
import { getUser } from "../../helper/userToken";
import mdHash from "../../helper/MdHasher";
import axios from "axios";
import { toast } from "react-toastify";

const useDeleteBook = () => {
  const queryClient = useQueryClient();
  const deleteBook = useMutation({
    mutationFn: (id: number) => {
      const api = PREFIX + Books.deleteBook(id);
      const userToken = getUser();
      const Sign = mdHash(
        "DELETE",
        Books.deleteBook(id),
        null,
        userToken ? userToken.secret : ""
      );
      return axios.delete(api, {
        headers: {
          Key: userToken?.key,
          Sign,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-all-books"] });
      toast.success("Book successful delete");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Somethings went error");
    },
  });
  return deleteBook;
};

export default useDeleteBook;
