import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import mdHash from "../../helper/MdHasher";
import { PREFIX, USER } from "../../shared/api";
import { iUser } from "./signup";
import { toast } from "react-toastify";

const useSignIn = () => {
  const signIn = useMutation({
    mutationFn: (data: iUser) => {
      const api = PREFIX + USER.signIn;
      const Sign = mdHash("GET", USER.signIn, null, data.key);
      return axios.get(api, {
        headers: {
          Key: data.key,
          Sign: Sign,
        },
      });
    },
    onSuccess: () => {
      toast.success("Welcome user");
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message);
      } else {
        toast.error("Somethings went error...");
      }
    },
  });
  return signIn;
};
export default useSignIn;
