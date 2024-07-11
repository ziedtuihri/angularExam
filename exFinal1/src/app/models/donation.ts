export class Donation {
    id!:                number;
    amount!:       string;
    DonationDate!:            string;
    Donor!: {
        id: number;   
        name: string;
        email: string;
        phone: string;
        }
}
