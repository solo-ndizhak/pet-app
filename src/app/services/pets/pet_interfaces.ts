export interface Item {
  id: number
  name: string
  breed: string
  gender: string
  image: string
  age_months: number
  taken: boolean
  type: 'cat' | 'dog'
}

export interface ItemDetails extends Item {
  description: string
  medical_notes: string
  additional_images: string[]
}

export interface Filters {
  nameOrBreed: string
  gender: string
  type: string
}