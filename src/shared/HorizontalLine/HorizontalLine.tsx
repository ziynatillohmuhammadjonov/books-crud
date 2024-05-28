import { Typography } from "@mui/material";
import { HTMLAttributes } from "react";
import { Colors } from "../tokens";

interface iProps extends HTMLAttributes<HTMLDivElement> {
  text?: string;
}

function HorizontalLine({ text, ...props }: iProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "stretch",
      }}
      {...props}
    >
      <hr
        style={{
          width: "100%",
          borderColor: Colors.border,
          borderBottomWidth: "0px",
        }}
      />
      {text && (
        <Typography
          fontSize={12}
          lineHeight={"15.06px"}
          paddingX={"10px"}
          color={Colors.border}
        >
          {text}
        </Typography>
      )}
      <hr
        style={{
          width: "100%",
          borderColor: Colors.border,
          borderBottomWidth: "0px",
        }}
      />
    </div>
  );
}

export default HorizontalLine;
