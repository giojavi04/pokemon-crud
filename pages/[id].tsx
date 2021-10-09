import { useEffect, useState } from "react";
import Head from 'next/head'
import { useRouter } from "next/router";
import { IPokemon } from "../interfaces/pokemon";
import { getPokemon, updatePokemon } from "../services/pokemons";
import PokemonAddUpdate from '../components/pokemonAddUpdate'

export default function Page() {
  const router = useRouter();
  const [pokemon, setPokemon] = useState<IPokemon | undefined>()
  const { id } = router.query;

  useEffect(() => {
    if (!id) return
    getPokemon(+id).then(data => setPokemon(data))
  }, [])

  const handleSubmit = async (data: any) => {
    if (!id) return
    const payload = { ...data, idAuthor: pokemon?.idAuthor, id: +id, created_at: pokemon?.created_at, updated_at: pokemon?.updated_at }
    await updatePokemon(+id, payload)
    router.push('/')
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Pokemon - Actualizar</title>
        <meta name="description" content='Pokemon crear nuevo pokemon'/>
      </Head>
      {pokemon && <PokemonAddUpdate isAdd={false} pokemon={pokemon} handleSubmitParent={handleSubmit} />
      }
    </>
  );
}