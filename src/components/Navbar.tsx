import {
  Avatar,
  Box,
  FormControl,
  Input,
  InputAdornment,
  Stack,
} from "@mui/material";
import LogoIcon from "../assets/icon/LogoIcon";
import { Link } from "react-router-dom";
import SearchIcon from "../assets/icon/SearchIcon";
import CloseIcon from "../assets/icon/CloseIcon";
import { useCallback, useEffect, useState } from "react";
import { Colors } from "../shared/tokens";
import NotfIcon from "../assets/icon/NotfIcon";
import useSearchBook from "../hooks/requests/searchBook";
import debounce from "lodash.debounce";
import searchBook from "../store/searchBookStre";

function Navbar() {
  const setBooks = searchBook((state) => state.updateBook);
  const loadingBooks = searchBook((state) => state.updateLoading);
  const [title, setTitle] = useState<string>("");
  const { mutate, data, isPending } = useSearchBook();

  useEffect(() => {
    if (data?.data.data) {
      setBooks(data?.data.data);
    }
  }, [data]);
  useEffect(() => {
    if (!title) {
      setBooks([]);
    }
  }, [title]);
  useEffect(() => {
    loadingBooks(isPending);
  }, [isPending]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((searchTerm: string) => {
      if (searchTerm) {
        mutate(searchTerm);
      }
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSearch(title);
    return debouncedSearch.cancel;
  }, [title, debouncedSearch]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      paddingY={"18px"}
    >
      <Box sx={{ display: "flex", gap: "24px", alignItems: "center" }}>
        <Link to={"/"}>
          <LogoIcon />
        </Link>
        <FormControl variant="filled">
          <Input
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: Colors.white,
              width: "340px",
              borderRadius: "4px",
              borderColor: "transparent",
              borderWidth: "0",
              paddingX: "26px",
              paddingY: "12px",
              fontFamily: "Mulish",
              "&:before": {
                borderBottom: "none",
              },
              "&:after": {
                borderBottom: "none",
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              "&:focus-within": {
                backgroundColor: Colors.white,
                "& svg path": {
                  stroke: Colors.gray,
                },
                "& svg g path": {
                  stroke: Colors.gray,
                },
              },

              "& .MuiInputBase-input:focus": {
                color: Colors.gray,
              },
            }}
            placeholder="Search for any training you want "
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            startAdornment={
              <InputAdornment position="start">
                <Box component={"div"} sx={{ paddingBottom: "10px" }}>
                  <SearchIcon />
                </Box>
              </InputAdornment>
            }
            endAdornment={
              title ? (
                <InputAdornment position="end">
                  <Box
                    component={"div"}
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      setTitle("");
                    }}
                  >
                    <CloseIcon />
                  </Box>
                </InputAdornment>
              ) : (
                ""
              )
            }
          />
        </FormControl>
      </Box>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <NotfIcon />
        <Avatar alt="Avatar" src="vite.svg" />
      </Stack>
    </Box>
  );
}

export default Navbar;
