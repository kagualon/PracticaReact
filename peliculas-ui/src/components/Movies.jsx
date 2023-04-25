import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ItemMovie from "./ItemMovie";
import { Grid } from "@mui/material";


const Movies = () => {
    const { isLoading, data } = useContext(DataContext);

    return ( 
        <div className="movies-content">
            <Grid container spacing={4}>       
            {
                !isLoading ?
                    data.map(item => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.imdbID}>
                        <ItemMovie 
                        id={item.imdbID} 
                        type={item.Type} 
                        title={item.Title} 
                        poster={item.Poster} 
                        year={item.Year}
                        />
                  </Grid>
                    ))
                : ''
            }
            </Grid>
        </div>
    );
}
 
export default Movies;