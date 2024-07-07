import { Owner } from "./owner"

export class Pet {
    id!:              number
    name!:            string
    vaccinationDate!: string
    vaccinated!:      boolean
    owner!: Owner

}
