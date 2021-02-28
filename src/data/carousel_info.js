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
        title: {
            pl: 'o centrum',
            en: 'about',
        },
        descShort: {
            pl: 'Centrum Badań Mózgu (CBM) ma na celu połączenie potencjałów badawczych jednostek uniwersyteckich oraz szpitala uniwersyteckiego. Unikatowa na skalę kraju synergia naukowa pozwala na prowadzenie interdyscyplinarnych badań podstawowych i klinicznych z zakresu neuronauki poznawczej oraz ich zastosowanie w diagnozie i praktyce medycznej.',
            en: '',
        },
        descLong: {
            pl: 'CBM jest międzywydziałową jednostką organizacyjną trzech Wydziałów UJ: Lekarskiego CM, Filozoficznego oraz Zarządzania i Komunikacji Społecznej. Dzięki integracji jednostek badawczych UJ-CM i UJ likwidujemy barierę między nauką a praktyką medyczną. Zespoły Badawcze, na co dzień koncentrujące się na poszczególnych aspektach funkcjonowania układu nerwowego człowieka, współpracują w celu interdyscyplinarnego rozwoju neuronauki poznawczej.',
            en: '',
        } ,
    },
    {
        key: uuidv4(),
        image: research,
        title: {
            pl: 'badania',
            en: 'research',
        },
        descShort: {
            pl: 'W skład CBM wchodzą przedstawiciele różnych dyscyplin badawczych, takich jak neurologia, psychiatria, geriatria, psychologia, kognitywistyka, informatyka, inżynieria biomedyczna, filozofia. W naszych badaniach dążymy do połączenia metod badawczych i kompetencji zespołów z różnych dziedzin nauki w ramach badań podstawowych i klinicznych.',
            en: '',
        },
        descLong: {
            pl: 'W CBM prowadzone są badania podstawowe i kliniczne dotyczące neuronauki poznawczej. Nasze badania prowadzimy w ramach założeń ruchu otwartej nauki i udostępniania środowisku naukowemu gromadzonych w toku działalności naukowej danych oraz wypracowanych metod. Współpracujemy z licznymi międzynarodowymi jednostkami badawczymi o podobnym profilu działalności.',
            en: '',
        },
    },
    {
        key: uuidv4(),
        image: transfer,
        title: {
            pl: 'wdrożenie',
            en: 'transfer',
        },
        descShort: {
            pl: 'Oprócz badań podstawowych jeden z celów centrum stanowi prowadzenie badań klinicznych. Określamy skuteczność oraz bezpieczeństwo stosowania produktów leczniczych, wyrobów medycznych i innych technik medycznych. Badania te prowadzimy według ściśle określonych zasad, których celem jest zapewnienie maksymalnego bezpieczeństwa i poszanowania praw pacjenta.',
            en: '',
        },
        descLong: {
            pl: 'Katedra Neurologii UJ-CM obejmuje opieką zdefiniowane grupy pacjentów, umożliwiając ich udział w badaniach klinicznych prowadzonych przez naukowców współpracujących w centrum (m.in. pacjenci po udarze, pacjenci chorujący na stwardnienie rozsiane, dystonie ogniskowe, chorobę Parkinsona, polineuropatie, choroby neurozwyrodnieniowe). KN UJ-CM specjalizuje się również w chorobach rzadkich. Jako jedyna klinika w Polsce jest członkiem Europejskiej Sieci Rzadkich Chorób Neurologicznych. W celu polepszenia metod diagnozy i terapii tych pacjentów łączymy potencjał kliniczny z potencjałem badań eksperymentalnych.',
            en: '',
        } ,
    },
    {
        key: uuidv4(),
        image: equipment,
        title: {
            pl: 'narzędzia',
            en: 'equipment',
        },
        descShort: {
            pl: 'Centrum pozwala na prowadzenie badań integrujących różne metodologie badawcze, w tym również integrowanie różnorakich technik pomiaru aktywności nerwowej w celu prowadzenia bardziej zaawansowanych badań. Optymalizujemy wykorzystanie urządzeń do badań aktywności mózgu człowieka znajdujących się w posiadaniu jednostek UJ. ',
            en: '',
        },
        descLong: {
            pl: 'Podstawowym celem CBM jest rozwój badań mózgu i układu nerwowego z wykorzystaniem zróżnicowanej metodologii badawczej. W ramach Centrum wykorzystywanych jest wiele nowoczesnych metod badawczych takich jak strukturalny i funkcjonalny rezonans magnetyczny, spektroskopia, elektroencefalografia, elektromiografia, elektrokardiografia pozwalające na pomiar aktywności nerwowej. Ponadto, wpływamy na mózg za pomocą nieinwazyjnych technik jego stymulacji, takich jak przezczaszkowa stymulacja magnetyczna i stymulacja prądem elektrycznym.',
            en: '',
        } ,
    },
    {
        key: uuidv4(),
        image: training,
        title: {
            pl: 'kształcenie',
            en: 'training',
        },
        descShort: {
            pl: 'Cognes to specjalny międzynarodowy program doktorski prowadzony przez instytucję założycielską CBM - Instytut Psychologii UJ.',
            en: '',
        },
        descLong: {
            pl: 'Oferujemy  komfortowe warunki pracy i dostęp do najnowocześniejszego sprzętu, w tym jedenastu laboratoriów wyposażonych w TMS, EEG, Finometer MIDI 2 oraz zaawansowane gogle VR. Program doktorski Cognes nauczania oparty został na dwóch dwóch filarach: interdyscyplinarności i internacjonalizacji. Jego celem jest przygotowanie doktorantów do prowadzenia samodzielnych badań z zakresu nauk społecznych i kognitywnych oraz neuronauki na przecięciu różnych dyscyplin.',
            en: '',
        } ,
    },
    {
        key: uuidv4(),
        image: dissemination,
        title: {
            pl: 'upowszechnienie',
            en: 'dissemination',
        },
        descShort: {
            pl: 'Czy jest neuronauka? Czy zajmują się neurobadacze i neurobadaczki? Jakie są jej najnowsze odkrycia? W jaki sposób badania te przekładają się na codzienne życie?',
            en: '',
        },
        descLong: {
            pl: 'Centrum Badań mózgu organizuje i wspiera liczne projekty związane z upowszechnianiem wiedzy o mózgu oraz zagadnień pokrewnych. To zarówno dyskusje, podcasty, nagrania wideo, jak i festiwale. Nasze spotkania to wyjątkowi goście z Polski i świata w nowoczesnym i przystępnym wydaniu. ',
            en: '',
        } ,
    },
] 