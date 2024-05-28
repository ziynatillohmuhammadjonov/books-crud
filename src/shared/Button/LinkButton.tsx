import { Link, Typography } from "@mui/material";
import { HTMLAttributes, ReactNode } from "react";
import { Colors, FontSizes } from "../tokens";

interface iProps extends HTMLAttributes<HTMLAnchorElement> {
  icon: ReactNode;
  text: string;
  url: string;
}

function LinkButton({ icon, url, text, ...props }: iProps) {
  return (
    <Link
      border={"solid"}
      borderRadius={4}
      href={url}
      sx={{
        borderWidth: "1px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        cursor: "pointer",
        borderColor: Colors.gray,
        textDecoration: "none",
      }}
      paddingY={"10px"}
      {...props}
    >
      {icon}
      <Typography
        color={Colors.gray}
        fontSize={FontSizes.buttonSize}
        lineHeight={FontSizes.buttomSizeHeight}
        fontWeight={"500"}
      >
        {text}
      </Typography>
    </Link>
  );
}

export default LinkButton;
