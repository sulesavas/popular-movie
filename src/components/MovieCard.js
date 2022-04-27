import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Rating, } from "@mui/material";
import { useNavigate } from "react-router-dom";



export default function MovieCard({ movie }) {
  let navigate = useNavigate();

  return (
    <Card
      className="mCard"
      sx={{ maxWidth: 350 } }
      onClick={() => navigate(`/detail/${movie.id}`)}
    >
      <CardActionArea style={{ backgroundColor: "#242624" }}>
        {/*  sayfa yönlendirilmesi için link ekleyip resmin etrafını sarmaladık */}

        <CardMedia
          component="img"
          height="350"
          image={
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
            movie.poster_path
          }
          alt={movie.title}
          
        />
      
        <CardContent>
          <Typography variant="inherit" component="div" style={{ color: "gray" }} >
            {movie.title}
          </Typography>
          <Rating size="small" name="half-rating" value={movie.vote_average/2} readOnly precision={0.1}/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
