import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Books, PREFIX } from "../../shared/api";
import { getUser } from "../../helper/userToken";
import mdHash from "../../helper/MdHasher";
import axios from "axios";
import { toast } from "react-toastify";

export interface iPatchBook {
  id: number;
  status: number;
}

const usePatchBook = () => {
  const queryClinet = useQueryClient();
  const patchBook = useMutation({
    mutationFn: (data: iPatchBook) => {
      const api = PREFIX + Books.patchBook(data.id);
      const userToken = getUser();
      const Sign = mdHash(
        "PATCH",
        Books.patchBook(data.id),
        { status: data.status },
        userToken ? userToken.secret : ""
      );
      return axios.patch(
        api,
        { status: data.status },
        {
          headers: {
            Key: userToken?.key,
            Sign,
          },
        }
      );
    },
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["get-all-books"] });
      toast.success("Update book");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Somethings went error");
    },
  });
  return patchBook;
};
export default usePatchBook;
