import './App.css';
import pokebolaVazia from './assets/images/emptypokeball.png'
//<img src={require('asset/imgem.png)} />

function App() {

    function searchPokemon() {
      const pokemon = document.getElementById("pokemon").value.toLowerCase();
      const pokeImg = document.getElementById("pokeImg");
      const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

      fetch(pokeApi)
      .then(response => response.json())
      .then(data => {
        pokeImg.src = data.sprites.front_default;
        pokeImg.alt = data.name;
        document.getElementById("pokeName").innerHTML = data.name;
      })
      .catch(err => {
        document.getElementById("pokeName").innerHTML = "Pokémon não encontrado";
        pokeImg.src = pokebolaVazia;
        pokeImg.width = 70;
        pokeImg.alt = "Pokébola aberta e vazia";
      })
      

    }

  return (
    <div className="App">
      <h1>Pokédex</h1>
        <form>
            <fieldset>
                <label htmlFor="pokemon">Pokémon:</label>
                <input type="text" id="pokemon" placeholder="Digite o nome do Pokémon"/>
                <button type="button" id="search" onClick={searchPokemon}>Pesquisar Pokémon</button>

                <div id="mostrarPokemon">
                    <h2 id="pokeName"></h2>
                    <img id="pokeImg"/>
                </div>
            </fieldset>
        </form>
    </div>
  );
}

export default App;
