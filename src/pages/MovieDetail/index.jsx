import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Container,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

function MovieDetail() {
  const [movieDetails, setMovieDetails] = useState({
    poster_path: ``,
    title: ``,
    overview: ``,
    vote_average:0,
  });

  let { id } = useParams();

  useEffect(() => {
    getMovieDetails();
  });

  const getMovieDetails = () => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1738daf9496d49421cdec9255aba9b10&language=tr-TR`
    ).then((value) => {
      setMovieDetails(value.data);
      console.log(value);
    });
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column">
        <Box className="md-title">
          <h2>{movieDetails.title} İMDB / {movieDetails.vote_average}</h2>
        </Box>
        <Box  display="flex" flexDirection="row" marginLeft={30}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                width="450"
                height="400"
                image={
                  "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
                  movieDetails.poster_path
                }
                alt={movieDetails.title}
              />
            </CardActionArea>
          </Card>
          <Box>
            <Card className="md-card" >
              <h3 className="type-title">
                {movieDetails.title}
              </h3>
              <p className="type-p">
                {movieDetails.overview}
              </p>
            </Card>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default MovieDetail;
