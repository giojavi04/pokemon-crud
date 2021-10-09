import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { getPokemons } from '../services/pokemons'
import { IPokemon } from '../interfaces/pokemon'
import PokemonHomeHeader from '../components/pokemonHomeHeader'
import PokemonTable from '../components/pokemonTable'

const Home: NextPage = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [pokemonsList, setPokemonsList] = useState<IPokemon[]>([])

  useEffect(() => {
    getPokemons().then(data => {
      setPokemons(data)
      setPokemonsList(data)
    })
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Pokemon - Home</title>
        <meta name="description" content='Pokemon test'/>
      </Head>
      <PokemonHomeHeader pokemons={pokemons} setPokemons={setPokemonsList} />
      <PokemonTable pokemons={pokemonsList} />
    </>
  )
}

export default Home
