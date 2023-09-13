const offset = 0
const limit = 10

const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

function convertPokemonToHtml(pokemon)
{
    // const div = document.createElement("div")
    // div.classList.add("pokemons")

    const html = `
        <li class = "pokemon">
            <span class = "name">${pokemon.name}</span>
            <span class = "number">${pokemon.id}</span>
    
            <div class = "detail">
                <ol class = "types">
                    <li class = "type">grass</li>
                    <li class = "type">poison</li>
                </ol>
                <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt = ${pokemon.name}/>
            </div>
        </li> `

    // div.innerHTML = html

    // pokemonList.appendChild(div)
}

const pokemonList = document.getElementById('pokemonList')

// const pokemon = async (id) => 
// {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`

//     await fetch(url).then(pokemon => pokemon.json()).then(pokemon => convertPokemonToHtml(pokemon))
// }

// async function pegaPokemon()
// {
//     for(let i = 1; i < limit; i++)
//     {
//         await pokemon(i)
//     }
// }

// pegaPokemon()

// pokemon()

pokeapi.getPokemons().then((pokemons = []) => {
        const newHtml = pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('')
        pokemonList.innerHTML = newHtml
    })