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
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FacebokIcon from "../assets/icon/FacebookIcon";
import GoogleIcon from "../assets/icon/GoogleIcon";
import useSignUp, { iUser } from "../hooks/requests/signup";
import LinkButton from "../shared/Button/LinkButton";
import HorizontalLine from "../shared/HorizontalLine/HorizontalLine";
import { Colors, FontSizes } from "../shared/tokens";

function SignUp() {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<iUser>();
  const { mutate, isSuccess } = useSignUp();

  const onSubmit: SubmitHandler<iUser> = (formData) => {
    mutate(formData);
    console.log(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  return (
    <Card
      sx={{
        minWidth: 270,
        maxWidth: 430,
        width: "430px",
        boxShadow: "0px 4px 32px #3333330A ",
      }}
    >
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <Typography
            variant="h2"
            fontSize={36}
            lineHeight="45.18px"
            color={Colors.gray}
            fontWeight={700}
            gutterBottom
            marginBottom="36px"
          >
            Sign up
          </Typography>
          <Box marginBottom="28.5px">
            <LinkButton
              icon={<GoogleIcon />}
              text="Continue with Google"
              style={{ marginBottom: "16px" }}
              url="https://www.google.com"
            />
            <LinkButton
              icon={<FacebokIcon />}
              text="Continue with Facebook"
              url="https://www.facebook.com"
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
                textAlign="left"
                color={Colors.gray}
                fontWeight="500"
                fontSize={FontSizes.inputTitleSize}
                lineHeight={FontSizes.inputTitleSizeHeight}
              >
                Your name
              </Typography>
              <TextField
                {...register("name")}
                id="outlined-basic"
                label=""
                variant="outlined"
                sx={{
                  width: "100%",
                  fontFamily: "Mulish",
                  color: Colors.gray,
                  padding: "0px",
                }}
                placeholder="Enter your name"
              />
            </InputLabel>
            <InputLabel>
              <Typography
                textAlign="left"
                color={Colors.gray}
                fontWeight="500"
                fontSize={FontSizes.inputTitleSize}
                lineHeight={FontSizes.inputTitleSizeHeight}
              >
                Your email
              </Typography>
              <TextField
                {...register("email")}
                id="outlined-basic"
                label=""
                variant="outlined"
                sx={{
                  width: "100%",
                  fontFamily: "Mulish",
                  color: Colors.gray,
                }}
                placeholder="Enter your email"
              />
            </InputLabel>
            <InputLabel>
              <Typography
                textAlign="left"
                color={Colors.gray}
                fontWeight="500"
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
                placeholder="Enter your key"
                type="password"
              />
            </InputLabel>
            <InputLabel>
              <Typography
                textAlign="left"
                color={Colors.gray}
                fontWeight="500"
                fontSize={FontSizes.inputTitleSize}
                lineHeight={FontSizes.inputTitleSizeHeight}
              >
                Your secret
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
                placeholder="Enter your secret"
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
              fontWeight="500"
              fontSize={FontSizes.buttonSize}
              lineHeight={FontSizes.buttomSizeHeight}
            >
              Button
            </Typography>
          </Button>
        </CardActions>
      </Box>
      <Link
        to="/signin"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "48px",
        }}
      >
        <Typography color="#000000">Already signed in? </Typography>
        &nbsp;
        <Typography>Go to sign in.</Typography>
      </Link>
    </Card>
  );
}

export default SignUp;
