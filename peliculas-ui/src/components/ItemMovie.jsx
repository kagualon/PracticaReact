import DefaultImage from "/NoImage.png"
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";



const ItemMovie = ({ id, title, type, year, poster }) => {

    let image = poster === "N/A" ? DefaultImage : poster;

    return (
        <Link to={`/movies/${id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>

        <Grid item xs={12} sm={8} md={8} lg={182}>
            <Card sx={{maxWidth: 200}} style={{width: "100%"}} className="card">
                <CardMedia
                    component="img"
                    height="300"
                    image={image}
                    alt={title}
                />
                <CardContent sx={{padding:"10px"}} className="card-body">
                    <Typography>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="p" className="row-info">
                        <span>{type.toUpperCase()}</span><span>{year}</span>
                    </Typography>
                </CardContent>
            </Card>
            </Grid>
        </Link>
    );
}

export default ItemMovie;