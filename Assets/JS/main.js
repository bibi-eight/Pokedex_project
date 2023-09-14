function convertPokemonTypeToLi(pokemonTypes){
        return pokemonTypes.map((typeSlot) => `<li class = "type">${typeSlot.type.name}</li>`)
}

function convertPokemonToHtml(pokemon)
{
    const html = `
        <li class = "pokemon">
            <span class = "name">${pokemon.name}</span>
            <span class = "number">#001</span>
    
            <div class = "detail">
                <ol class = "types">
                    ${convertPokemonTypeToLi(pokemon.types).join('')}
                </ol>
                <img src= ${pokemon.sprites.other.dream_world.front_default} alt = ${pokemon.name}/>
            </div>
        </li> `

    console.log(html);

    return html
}

const pokemonList = document.getElementById('pokemonList')

pokeapi.getPokemons().then((pokemons = []) => {
        const newHtml = pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('')
        pokemonList.innerHTML = newHtml
    })