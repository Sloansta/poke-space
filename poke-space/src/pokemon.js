import pokemon from 'pokemontcgsdk';

pokemon.configure({ apiKey: '529783b1-fb0b-4a9c-93af-ec4b17dc871f' });

export default findPokemon = () => {
    pokemon.configure({ apiKey: '529783b1-fb0b-4a9c-93af-ec4b17dc871f' });

    pokemon.card.find('base1-4')
        .then(card => {
            return card;
        });
};