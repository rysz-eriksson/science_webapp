import { v4 as uuidv4 } from 'uuid';

export const sectionsInfo = {
    about: [
        {
            pl: 'aktualności',
            en: 'news',
            key: uuidv4(),    
        },
        {
            pl: 'członkowie',
            en: 'members',
            key: uuidv4(),    
        },
        {
            pl: 'zespoły badawcze',
            en: 'research groups',
            key: uuidv4(),    
        },
        {
            pl: 'partnerzy',
            en: 'partners',
            key: uuidv4(),    
        },
    ],
    research: [
        {
            pl: 'projekty',
            en: 'projects',
            key: uuidv4(),    
        },
        {
            pl: 'publikacje',
            en: 'publications',
            key: uuidv4(),    
        },
        {
            pl: 'konferencje i warsztaty',
            en: 'conferences and workshops',
            key: uuidv4(),  
        },
    ],
    onboarding: [     
        {
            pl: 'projekty aplikacyjne',
            en: 'application projects',
            key: uuidv4(),    
        },
        {
            pl: 'próby kliniczne',
            en: 'clinical trials',
            key: uuidv4(),    
        },
    ],
    tools: [
        {
            pl: 'rezonans magnetyczny',
            en: 'MRI',
            key: uuidv4(),    
        },
        {
            pl: 'spektroskopia',
            en: 'spectroscopy',
            key: uuidv4(),    
        },
    ],
    education: [
        {
            pl: 'cognes',
            en: 'cognes',
            key: uuidv4(),    
        },
        {
            pl: 'staże badawcze',
            en: 'science internships',
            key: uuidv4(),    
        },
    ],
    spreading: [
        {
            pl: 'w mediach',
            en: 'media',
            key: uuidv4(),    
        },
        {
            pl: 'wykłady',
            en: 'lectures',
            key: uuidv4(),    
        },
    ],
};