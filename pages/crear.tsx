import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import PokemonAddUpdate from '../components/pokemonAddUpdate'
import { createPokemon } from '../services/pokemons'

const Create: NextPage = () => {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    const payload = {...data, idAuthor: 1}
    await createPokemon(payload)
    router.push('/')
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Pokemon - Crear</title>
        <meta name="description" content='Pokemon crear nuevo pokemon'/>
      </Head>
      <PokemonAddUpdate isAdd={true} handleSubmitParent={handleSubmit} />
    </>
  )
}

export default Create
