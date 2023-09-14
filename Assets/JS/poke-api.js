const pokeapi = {}

function convertePokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.number = pokeDetail.number

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    
    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeapi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertePokeApiDetailToPokemon)
}

pokeapi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemonList) => pokemonList.map(pokeapi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) =>  pokemonsDetails)  
    
}