
export type Name = {
  name: string
}

export type APIType = {
  id: number
  name: Name
}

export type APITypes = APIType[]

export type APIPokemon = {
  id: number
  name: string
  height: number
  weight: number
  order: number,
  types: APITypes
}