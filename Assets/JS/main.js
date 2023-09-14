function convertPokemonToHtml(pokemon)
{
    const html = `
        <li class = "pokemon ${pokemon.type}">
            <span class = "number">${pokemon.number}</span>
            <span class = "name">${pokemon.name}</span>
    
            <div class = "detail">
                <ol class = "types">
                    ${pokemon.types.map((type) => `<li class = "type" ${type}>${type}</li>`).join('')}
                </ol>
                <img src= ${pokemon.photo} alt = ${pokemon.name}/>
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