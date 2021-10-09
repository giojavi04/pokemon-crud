import { useRouter } from "next/router";
import { SearchIcon, PlusSmIcon } from "@heroicons/react/outline";
import { IPokemon } from "../interfaces/pokemon";

interface Props {
  pokemons: IPokemon[];
  setPokemons: any;
}

export default function PokemonHomeHeader({ pokemons, setPokemons }: Props) {
  const router = useRouter();

  const filterList = (e: any) => {
    const updateList = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    })
    setPokemons(updateList);
  }

  return (
    <div className="bg-white shadow py-4 mb-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between">
          <div className="flex-1 px-2 lg:px-0">
            <form>
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Buscar
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Buscar por nombre"
                    type="search"
                    onChange={(e) => filterList(e)}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => router.push("/crear")}
              >
                <PlusSmIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                <span>Nuevo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}