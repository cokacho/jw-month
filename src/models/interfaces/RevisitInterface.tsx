import PersonInterface from "./PersonInterface";

export default interface RevisitInterface {
    id: number,
    person: PersonInterface;
    latitude: string;
    longitude: string;
    description?: string;
    date?: Date;
    alert?: boolean;
}