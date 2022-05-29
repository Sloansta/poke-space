import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Container, Grid, CardActions, Button } from '@material-ui/core';
import useStyles from '../styles';

function PokemonHome() {
    const [data, setData] = useState([]);
    const classes = useStyles();
    
    // fetches and fills initial state with pokemon cards
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

    // call
    getPokemon();

    return (
        <>
            <Container className={ classes.cardGrid } maxWidth="md">
                <Grid container spacing={4}>
                    {data.map((card) => (
                        <Grid item key={card.id} xs={12} sm={6} md={4}>
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
                                        {card.types.join(', ')}
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
                </Grid>
            </Container>
        </>
    )
}

export default PokemonHome;