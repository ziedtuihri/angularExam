import { Owner } from "./owner"

export class Pet {
    id!:              string
    name!:            string
    vaccinationDate!: string
    vaccinated!:      boolean
    owner!: Owner

}
