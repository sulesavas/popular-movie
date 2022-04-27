import { Box, Stack, Typography } from "@mui/material";
import PopularMovies from "pages/PopularMovies";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import NewMovies from "pages/NewMovies";

export default function Home() {
  let navigate = useNavigate();

  return (
    <Stack marginBottom={10}>
      <Typography
        variant="h5"
        marginLeft={25}
        fontFamily={"monospace"}
        marginBottom={3}
      >
        YENİ FİLMLER
      </Typography>
      <Stack
        direction={"row"}
        marginLeft=" auto"
        marginRight="auto"
        display="flex"
      >
        <NewMovies preview={true} />

        <Box
          display="flex"
          alignItems="center"
          sx={{
            "&:hover": { backgroundColor: "#929292", cursor: 'pointer' }
          }}
        >
          <ArrowForwardIosIcon
            sx={{ fontSize: 100 }}
            onClick={() => navigate(`NewMovies`)}
          ></ArrowForwardIosIcon>
        </Box>
      </Stack>

      <Typography
        variant="h5"
        marginLeft={25}
        fontFamily={"monospace"}
        marginTop={6}
        marginBottom={3}
      >
        POPÜLER FİLMLER
      </Typography>
      <Stack
        direction={"row"}
        marginLeft=" auto"
        marginRight="auto"
        display="flex"
      >
        <PopularMovies preview={true} />

        <Box
          display="flex"
          alignItems="center"
          sx={{
            "&:hover": { backgroundColor: "#929292", cursor: 'pointer' }
          }}
        >
          <ArrowForwardIosIcon
            sx={{ fontSize: 100 }}
            onClick={() => navigate(`PopularMovies`)}
          ></ArrowForwardIosIcon>
        </Box>
      </Stack>  
    </Stack>
  );

}
