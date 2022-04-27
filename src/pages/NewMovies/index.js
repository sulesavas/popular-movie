import { Container, Grid, Box, Pagination } from "@mui/material";
import axios from "axios";
import MovieCard from "components/MovieCard";
import React, { useEffect, useState } from "react";

function NewMovieList({ preview }) {
  const [NewMovies, setNewMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  /*const [totalPages, setTotalPages] = useState(1);
   */

  useEffect(() => {
    getNewMovies(pageNo);
  }, [pageNo]);

  const getNewMovies = (pageNo) => {
    axios(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=1738daf9496d49421cdec9255aba9b10&language=tr-TR&page=${pageNo}`
    ).then((value) => {
      setNewMovies(value.data.results);

      /*setTotalPages(value.data.total_pages);*/

      console.log(value);
    });
  };
  if (preview === true) {
    return (
      <div>
        <Container>
          <Grid container spacing={6}>
            {NewMovies.slice(0, 4).map((movie, index) => {
              return (
                <Grid item xs={12} md={6} lg={3} key={index}>
                  <MovieCard movie={movie} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <Container>
          <Box margin={5} display="flex" justifyContent="center">
            <Pagination
              count={
                50
              } /* süslü parantez içine total_pages yazılsaydı çektiğimiz verimiz kadar olan sayfamız 
            görünecekti fakat çok fazla olduğu için 50 adet yeterli oldu */
              page={pageNo}
              onChange={(event, page) => {
                setPageNo(page);
              }}
              variant="outlined"
            />
          </Box>
          <Grid container spacing={6}>
            {NewMovies.map((movie, index) => {
              return (
                <Grid item xs={12} md={6} lg={3} key={index}>
                  <MovieCard movie={movie} />
                </Grid>
              );
            })}
          </Grid>
          <Box margin={5} display="flex" justifyContent="center">
            <Pagination
              count={50}
              page={pageNo}
              onChange={(event, page) => {
                setPageNo(page);
              }}
              variant="outlined"
            />
          </Box>
        </Container>
      </div>
    );
  }
}

export default NewMovieList;
