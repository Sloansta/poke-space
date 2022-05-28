import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Container, Grid, CardActions, Button } from '@material-ui/core';
import useStyles from './styles';

function PokemonHome() {
    const [data, setData] = useState([]);
    const classes = useStyles();
    
    const getPokemon = () => {
        fetch('https://api.pokemontcg.io/v2/cards')
        .then(res => res.json())
        .then(pokemonCards => {
            console.log(pokemonCards.data);
            setData(pokemonCards.data);
        })
        .catch(err => {
            console.log(err);
        });
    };

    //getPokemon();

    return (
        <>
            <Button onClick={getPokemon}>Get Pokemon Data</Button>
            <Container className={ classes.cardGrid } maxWidth="md">
                {data.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={card.images.small}
                                title={card.name}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5">
                                    {card.name}
                                </Typography>
                                <Typography>
                                    {card.types}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="sm" color="primary">
                                    View 
                                </Button>
                                <Button size="sm" color="primary">
                                    Edit
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Container>
        </>
    )
}

export default PokemonHome;