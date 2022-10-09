import ActivityInterface from "./ActivityInterface";
import PublicationInterface from "./PublicationInterface";

export default interface SummaryInterface {
    id: number;  
    base?: '';
    activity?: ActivityInterface;
    publication_detail?: PublicationInterface[];
    total_hours: number;
    total_evideos: number;
    total_tracts: number;
    total_revisits: number;
    total_books: number;
    total_booklets: number;
    total_studies: number;
}