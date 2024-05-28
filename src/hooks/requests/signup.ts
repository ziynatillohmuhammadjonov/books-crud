import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { PREFIX, USER } from "../../shared/api";
import mdHash from "../../helper/MdHasher";

export interface iUser {
  name?: string;
  email?: string;
  key: string;
  secret: string;
}

export default function useSignUp() {
  const signUp = useMutation({
    mutationFn: (data: iUser) => {
      const api = PREFIX + USER.signUp;
      const Sign = mdHash("POST", USER.signUp, data, data.secret);
      console.log("data: " + data, "Sign: " + Sign);
      return axios.post(api, data, {
        headers: {
          Key: data.key,
          Sign: Sign,
        },
      });
    },
    onSuccess: (res) => {
      console.log(res.data);
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
  return signUp;
}
