import * as React from 'react';
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const { Poster, Title, Plot, Year, Country, Director, Released, Runtime } = data;
let image = Poster === "N/A" ? DefaultImage : Poster;

export default function MovieCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        alt={Title}
        title={Title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {Title}
        </Typography>
        <Typography variant="body2" component="p">
         {Plot}
        </Typography>
        <Typography variant="body2" component="p">
         {Country}
        </Typography>
        <Typography variant="body2" component="p">
         {Director}
        </Typography>
        <Typography variant="body2" component="p">
         {Released}
        </Typography>
        <Typography variant="body2" component="p">
         {Runtime}
        </Typography>
        <Typography variant="body2" component="p">
         {Year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
