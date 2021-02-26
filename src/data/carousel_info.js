import { v4 as uuidv4 } from 'uuid';
import about from '../images/about-centre.jpg';
import training from '../images/training.png';
import transfer from '../images/transfer.jpg';
import dissemination from '../images/dissemination.jpg';
import equipment from '../images/equipment.png';
import research from '../images/research.jpg';

export const carouselInfo = [
    {
        key: uuidv4(),
        image: about,
        title: 'o centrum',
        description: 'Esse in magna est sunt. Occaecat labore non ipsum esse veniam cillum aliqua consectetur non ut deserunt. Ex exercitation adipisicing labore reprehenderit eu ea ex eiusmod nulla in aute.'
    },
    {
        key: uuidv4(),
        image: research,
        title: 'badania',
        description: 'Esse in magna est sunt. Occaecat labore non ipsum esse veniam cillum aliqua consectetur non ut deserunt. Ex exercitation adipisicing labore reprehenderit eu ea ex eiusmod nulla in aute.'
    },
    {
        key: uuidv4(),
        image: transfer,
        title: 'wdrożenie',
        description: 'Esse in magna est sunt. Occaecat labore non ipsum esse veniam cillum aliqua consectetur non ut deserunt. Ex exercitation adipisicing labore reprehenderit eu ea ex eiusmod nulla in aute.'
    },
    {
        key: uuidv4(),
        image: equipment,
        title: 'narzędzia',
        description: 'Esse in magna est sunt. Occaecat labore non ipsum esse veniam cillum aliqua consectetur non ut deserunt. Ex exercitation adipisicing labore reprehenderit eu ea ex eiusmod nulla in aute.'
    },
    {
        key: uuidv4(),
        image: training,
        title: 'kształcenie',
        description: 'Esse in magna est sunt. Occaecat labore non ipsum esse veniam cillum aliqua consectetur non ut deserunt. Ex exercitation adipisicing labore reprehenderit eu ea ex eiusmod nulla in aute.'
    },
    {
        key: uuidv4(),
        image: dissemination,
        title: 'upowszechnienie',
        description: 'Esse in magna est sunt. Occaecat labore non ipsum esse veniam cillum aliqua consectetur non ut deserunt. Ex exercitation adipisicing labore reprehenderit eu ea ex eiusmod nulla in aute.'
    },
] 