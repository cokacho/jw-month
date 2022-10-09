import RevisitInterface from "../src/models/interfaces/RevisitInterface";
import SummaryInterface from "../src/models/interfaces/SummaryInterface";

const revisits: RevisitInterface[] = [
    {
        id: 1,
        person: {
            id: 1,
            first_name: 'Doña Lourdes',
            last_name: 'Huanca'
        },
        latitude: '',
        longitude: '',
        description: 'Bastante receptiva',
        date: new Date('2022-10-08T03:24:00'),
        alert: false
    },
    {
        id: 2,
        person: {
            id: 2,
            first_name: 'Noe',
            last_name: 'Abarca',
        },
        latitude: '',
        longitude: '',
        description: 'Bastante receptiva',
        date: new Date('2022-10-09T03:24:00'),
        alert: false
    },
    {
        id: 3,
        person: {
            id: 3,
            first_name: 'Doña Lourdes',
            last_name: 'Huanca',
        },
        latitude: '',
        longitude: '',
        description: 'Bastante receptiva',
        date: new Date('2022-10-10T03:24:00'),
        alert: false
    },
    {
        id: 4,
        person: {
            id: 4,
            first_name: 'Doña Lourdes',
            last_name: 'Huanca',
        },
        latitude: '',
        longitude: '',
        description: 'Bastante receptiva',
        date: new Date('2022-10-11T03:24:00'),
        alert: false
    },
    {
        id: 5,
        person: {
            id: 5,
            first_name: 'Doña Lourdes',
            last_name: 'Huanca',
        },
        latitude: '',
        longitude: '',
        description: 'Bastante receptiva',
        date: new Date('2022-10-12T03:24:00'),
        alert: false
    },
    {
        id: 6,
        person: {
            id: 6,
            first_name: 'Doña Lourdes',
            last_name: 'Huanca',
        },
        latitude: '',
        longitude: '',
        description: 'Bastante receptiva',
        date: new Date('2022-10-13T03:24:00'),
        alert: false
    },
    {
        id: 7,
        person: {
            id: 7,
            first_name: 'Doña Lourdes',
            last_name: 'Huanca',
        },
        latitude: '',
        longitude: '',
        description: 'Bastante receptiva',
        date: new Date('2022-10-14T03:24:00'),
        alert: false
    },
];

const summaries: SummaryInterface[] = [
    {
        id: 1,
        base: '',
        activity: {
            name: 'Enero',
            start_date: new Date('2022-01-01T00:00:00'),
            end_date: new Date('2022-01-31T23:59:59')
        },
        total_hours: 12,
        total_evideos: 2,
        total_tracts: 4,
        total_revisits: 3,
        total_books: 3,
        total_booklets: 3,
        total_studies: 1
    },
    {
        id: 2,
        base: '',
        activity: {
            name: 'Febrero',
            start_date: new Date('2022-02-01T00:00:00'),
            end_date: new Date('2022-02-28T23:59:59')
        },
        total_hours: 13,
        total_evideos: 2,
        total_tracts: 4,
        total_revisits: 3,
        total_books: 3,
        total_booklets: 3,
        total_studies: 1
    },
    {
        id: 3,
        base: '',
        activity: {
            name: 'Marzo',
            start_date: new Date('2022-03-01T00:00:00'),
            end_date: new Date('2022-03-31T23:59:59')
        },
        total_hours: 14,
        total_evideos: 2,
        total_tracts: 4,
        total_revisits: 3,
        total_books: 3,
        total_booklets: 3,
        total_studies: 1
    },
    {
        id: 4,
        base: '',
        activity: {
            name: 'Abril',
            start_date: new Date('2022-04-01T00:00:00'),
            end_date: new Date('2022-04-30T23:59:59')
        },
        total_hours: 15,
        total_evideos: 2,
        total_tracts: 4,
        total_revisits: 3,
        total_books: 3,
        total_booklets: 3,
        total_studies: 1
    },
    {
        id: 5,
        base: '',
        activity: {
            name: 'Mayo',
            start_date: new Date('2022-05-01T00:00:00'),
            end_date: new Date('2022-05-31T23:59:59')
        },
        total_hours: 16,
        total_evideos: 2,
        total_tracts: 4,
        total_revisits: 3,
        total_books: 3,
        total_booklets: 3,
        total_studies: 1
    },
    {
        id: 6,
        base: '',
        activity: {
            name: 'Octubre',
            start_date: new Date('2022-10-01T00:00:00'),
            end_date: new Date('2022-10-31T23:59:59')
        },
        total_hours: 17,
        total_evideos: 2,
        total_tracts: 4,
        total_revisits: 3,
        total_books: 3,
        total_booklets: 3,
        total_studies: 1
    }
];

module.exports = {revisits, summaries};