import { Input, InputLabel, InputProps, Typography } from "@mui/material";
import { HTMLAttributes } from "react";

interface iInput extends InputProps {}

interface iProps extends HTMLAttributes<HTMLLabelElement> {
  input?: iInput;
  title: string;
}

function TitleInput({ input: { ...props }, title }: iProps) {
  return (
    <InputLabel>
      <Typography>{title}</Typography>
      <Input {...props} type="text" />
    </InputLabel>
  );
}

export default TitleInput;
