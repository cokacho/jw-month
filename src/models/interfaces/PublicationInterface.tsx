export default interface PublicationInterface {
    url?: string;
    name: string;
    description?: string;
    level?: 'low' | "medium" | "hight";
}