import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { IPokemon } from "../interfaces/pokemon";

type Inputs = {
  name: string,
  image: string,
  hp: Number,
  attack: Number,
  defense: Number,
  type: string,
};

interface Props {
  isAdd: boolean,
  pokemon?: IPokemon,
  handleSubmitParent: any
}

export default function PokemonAddUpdate({ isAdd = true, pokemon, handleSubmitParent }: Props) {
  const router = useRouter();
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    handleSubmitParent(data)
  };

  useEffect(() => {
    if (pokemon) {
      setValue("name", pokemon.name);
      setValue("image", pokemon.image);
      setValue("type", pokemon.type);
      setValue("hp", pokemon.hp);
      setValue("attack", pokemon.attack);
      setValue("defense", pokemon.defense);
    }
  }, [pokemon])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white px-14 py-8">
            <div className="mb-8">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{isAdd ? 'Crear' : 'Actualizar'} Pokemon</h3>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm">
                <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                  Nombre
                </label>
                <input
                  {...register("name")}
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Eje. Bulbasor"
                  required
                />
              </div>

              <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm">
                <label htmlFor="image" className="block text-xs font-medium text-gray-900">
                  Imagen
                </label>
                <input
                  {...register("image")}
                  type="text"
                  name="image"
                  id="image"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Url"
                  required
                />
              </div>

              <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm">
                <label htmlFor="hp" className="block text-xs font-medium text-gray-900">
                  Vida
                </label>
                <input
                  {...register("hp")}
                  type="number"
                  name="hp"
                  id="hp"
                  min="0"
                  max="100"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Eje. 50"
                  required
                />
              </div>

              <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm">
                <label htmlFor="attack" className="block text-xs font-medium text-gray-900">
                  Ataque
                </label>
                <input
                  {...register("attack")}
                  type="number"
                  name="attack"
                  id="attack"
                  min="0"
                  max="100"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Eje. 33"
                  required
                />
              </div>

              <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm">
                <label htmlFor="defense" className="block text-xs font-medium text-gray-900">
                  Defensa
                </label>
                <input
                  {...register("defense")}
                  type="number"
                  name="defense"
                  id="defense"
                  min="0"
                  max="100"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Eje. 80"
                  required
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Tipo
                </label>
                <select
                  {...register("type")}
                  id="type"
                  name="type"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  required
                >
                  <option>normal</option>
                  <option>water</option>
                  <option>fire</option>
                  <option>bug</option>
                  <option>poison</option>
                </select>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="button"
              className="bg-white py-2 px-4 mr-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => router.back()}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}