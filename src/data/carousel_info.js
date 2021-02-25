import { v4 as uuidv4 } from 'uuid';
import about from '../images/about-centre.jpg';
import education from '../images/education.png';
import onboarding from '../images/onboarding.jpg';
import spreading from '../images/spreading.jpg';
import tools from '../images/tools.png';
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
        image: onboarding,
        title: 'wdrożenie',
        description: 'Esse in magna est sunt. Occaecat labore non ipsum esse veniam cillum aliqua consectetur non ut deserunt. Ex exercitation adipisicing labore reprehenderit eu ea ex eiusmod nulla in aute.'
    },
    {
        key: uuidv4(),
        image: tools,
        title: 'narzędzia',
        description: 'Esse in magna est sunt. Occaecat labore non ipsum esse veniam cillum aliqua consectetur non ut deserunt. Ex exercitation adipisicing labore reprehenderit eu ea ex eiusmod nulla in aute.'
    },
    {
        key: uuidv4(),
        image: education,
        title: 'kształcenie',
        description: 'Esse in magna est sunt. Occaecat labore non ipsum esse veniam cillum aliqua consectetur non ut deserunt. Ex exercitation adipisicing labore reprehenderit eu ea ex eiusmod nulla in aute.'
    },
    {
        key: uuidv4(),
        image: spreading,
        title: 'upowszechnienie',
        description: 'Esse in magna est sunt. Occaecat labore non ipsum esse veniam cillum aliqua consectetur non ut deserunt. Ex exercitation adipisicing labore reprehenderit eu ea ex eiusmod nulla in aute.'
    },
] 