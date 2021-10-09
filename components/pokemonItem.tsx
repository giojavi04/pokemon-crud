import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { IPokemon } from "../interfaces/pokemon"
import PokemonDelete from "../components/pokemonDelete"
import { deletePokemon } from '../services/pokemons'

interface Props {
  pokemon: IPokemon;
}

export default function PokemonItem({ pokemon }: Props) {
  const [showDelete, setShowDelete] = useState(false)
  const router = useRouter()

  const handleChange = async () => {
    if (!pokemon.id) return
    await deletePokemon(pokemon.id)
    setShowDelete(false)
    router.reload()
  }

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <Image className="h-10 w-10 rounded-full" src={pokemon.image} alt={pokemon.name} width={45} height={45} />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{pokemon.name}</div>
            <div className="text-sm text-gray-500">{pokemon.id}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{pokemon.type}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {pokemon.hp}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {pokemon.attack}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {pokemon.defense}
      </td>
      <td className="px-6 py-4 text-right text-sm font-medium">
        <a className="text-indigo-600 hover:text-indigo-900 mr-4 cursor-pointer" onClick={() => router.push(`/${pokemon.id}`)} >
          Editar
        </a>
        <a onClick={() => setShowDelete(true)} className="text-red-500 hover:text-red-600 cursor-pointer">
          Eliminar
        </a>
      </td>
      {showDelete && (
          <PokemonDelete pokemon={pokemon} open={showDelete} toggleOpen={setShowDelete} handleChange={handleChange} />
        )
      }
    </tr>
  )
}