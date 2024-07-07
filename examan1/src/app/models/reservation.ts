import { Property } from "./property"; 

export class Reservation {
    id!:            number;
    name!:          string;
    phoneNumber!:   number;
    startDate!:     Date;
    endDate!:       Date;
    property!:      Property;
}
