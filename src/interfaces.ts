export interface Person {
  readonly id: string
  readonly name: string
  readonly age?: number
  readonly favoriteColor?: string
}

export type Users = Record<string, Person>

export interface UserFormMeta {
  readonly name: string
  readonly age?: number
  readonly favoriteColor?: string
}
