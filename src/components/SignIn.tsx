import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Colors, FontSizes } from "../shared/tokens";
import LinkButton from "../shared/Button/LinkButton";
import GoogleIcon from "../assets/icon/GoogleIcon";
import FacebokIcon from "../assets/icon/FacebookIcon";
import HorizontalLine from "../shared/HorizontalLine/HorizontalLine";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useSignIn from "../hooks/requests/signin";
import { iUser } from "../hooks/requests/signup";
import { useEffect } from "react";
import { setUser } from "../helper/userToken";

function SignIn() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isSuccess, isError, data } = useSignIn();
  const onSubmit = (data: iUser) => {
    mutate(data);
    console.log(data);
  };

  useEffect(() => {
    if (isSuccess && data.data) {
      const resData: iUser & { id: number } = data.data.data;
      const { id, email, name, ...res } = resData;
      setUser(res);
      navigate("/");
    }
  }, [data]);

  return (
    <Card
      sx={{
        minWidth: 270,
        maxWidth: 430,
        width: "430px",
        boxShadow: "0px 4px 32px #3333330A ",
      }}
    >
      <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <Typography
            variant="h2"
            fontSize={36}
            lineHeight={"45.18px"}
            color={Colors.gray}
            fontWeight={700}
            gutterBottom
            marginBottom={"36px"}
          >
            Sign in
          </Typography>
          <Box marginBottom={"28.5px"}>
            <LinkButton
              icon={<GoogleIcon />}
              text={"Continue with Google"}
              style={{ marginBottom: "16px" }}
              url="www.google.com"
            />
            <LinkButton
              icon={<FacebokIcon />}
              text={"Continue with Facebook"}
              url="www.facebook.com"
              style={{ marginBottom: "28.5px" }}
            />
            <HorizontalLine text="OR" />
          </Box>
          {/* Input Group start */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "20px",
            }}
          >
            <InputLabel>
              <Typography
                textAlign={"left"}
                color={Colors.gray}
                fontWeight={"500"}
                fontSize={FontSizes.inputTitleSize}
                lineHeight={FontSizes.inputTitleSizeHeight}
              >
                Your Key
              </Typography>
              <TextField
                {...register("key")}
                id="outlined-basic"
                label=""
                variant="outlined"
                sx={{
                  width: "100%",
                  fontFamily: "Mulish",
                  color: Colors.gray,
                }}
                placeholder="Enter your password"
                type="password"
              />
            </InputLabel>
            <InputLabel>
              <Typography
                textAlign={"left"}
                color={Colors.gray}
                fontWeight={"500"}
                fontSize={FontSizes.inputTitleSize}
                lineHeight={FontSizes.inputTitleSizeHeight}
              >
                Your password
              </Typography>
              <TextField
                {...register("secret")}
                id="outlined-basic"
                label=""
                variant="outlined"
                sx={{
                  width: "100%",
                  fontFamily: "Mulish",
                  color: Colors.gray,
                }}
                placeholder="Enter your password"
                type="password"
              />
            </InputLabel>
          </Box>
          {/* Input Group end */}
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: Colors.primary,
              color: Colors.white,
              paddingY: "10px",
              textTransform: "capitalize",
              transition: "0.5s",
              ":hover": {
                backgroundColor: Colors.primaryHover,
              },
            }}
          >
            <Typography
              color={Colors.white}
              fontWeight={"500"}
              fontSize={FontSizes.buttonSize}
              lineHeight={FontSizes.buttomSizeHeight}
            >
              Button
            </Typography>
          </Button>
        </CardActions>
      </Box>
      <Link
        to={"/signup"}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "48px",
        }}
      >
        <Typography color={"#000000"}>Already signed up? </Typography>
        &nbsp;
        <Typography> Go to sign up.</Typography>
      </Link>
    </Card>
  );
}

export default SignIn;
