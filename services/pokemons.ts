import { IPokemon } from "../interfaces/pokemon"

const API_URL = "https://pokemon-pichincha.herokuapp.com/pokemons"

export const getPokemons = async () => {
  const response = await fetch(`${API_URL}/?idAuthor=1`)
  return response.json()
}

export const getPokemon = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`)
  return response.json()
}

export const createPokemon = async (pokemon: IPokemon) => {
  const response = await fetch(`${API_URL}/?idAuthor=1`, {
    method: "POST",
    body: JSON.stringify(pokemon),
  })
  return response.json()
}

export const updatePokemon = async (id: number, pokemon: IPokemon) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(pokemon),
  })
  return response.json()
}

export const deletePokemon = async (id: number) => {
  return await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  })
}