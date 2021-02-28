import mri from '../images/mri.png';
import spectro from '../images/spectro.jpg';
import electro from '../images/electro.jpg';
import stimulation from '../images/stimulation.png';
import other from '../images/other.png';


export const equipmentInfo = {
    mri: {
        image: mri,
        title: {
            pl: 'rezonans magnetyczny',
            en: '',
        },
        paragraphs: {
            pl: [
                'Rezonans magnetyczny jest jedną z najnowocześniejszych metod obrazowania struktur ciała wykorzystującą właściwości pola magnetycznego. Umożliwia w sposób nieinwazyjny badanie wewnętrznych struktur organizmu, zarówno pod względem ich budowy jak i aktywności. Pozwala na unikalną charakterystykę morfologii oraz funkcji tkanek i narządów, dostarczając często informacji niemożliwych do uzyskania innymi metodami diagnostycznymi.',
                'Dysponujemy wysokiej klasy skanerem rezonansu magnetycznego 3T Magnetom Skyra firmy Siemens. Skaner posiada różnorakie cewki  pozwalające na dostosowanie jakości otrzymywanego obrazu do potrzeb. Urządzenie umożliwia wykonywanie badań za pomocą następujących technik: obrazowanie funkcjonalne (fMRI), obrazowanie tensora dyfuzji (DTI), obrazowanie spektroskopii protonowej, obrazowanie angiograficzne bezkontrastowe, obrazowanie perfuzji i dyfuzji.',
            ],
            en: []
        }
    },
    spectroscophy: {
        image: spectro,
        title: {
            pl: 'Spektroskopia',
            en: '',
        },
        paragraphs: {
            pl: [
                'Funkcjonalna spektroskopia w bliskiej podczerwieni (fNIRS) stanowi relatywnie nową, nieinwazyjną metodę pomiaru zmian w korowej odpowiedzi hemodynamicznej. Ogółem, podniesiona koncentracja utlenowanej Hb oraz obniżona koncentracja nieutlenowanej Hb wskazują na wzmożoną aktywność określonych obszarów kory (odpowiednio, zapotrzebowanie oraz faktyczne zużycie tlenu przez mózg). Mimo to metoda ta stanowi bardzo dobry kompromis między możliwościami EEG i fMRI, a ponadto posiada kilka dodatkowych zalet czyniących ją powszechnie akceptowanym narzędziem do badań nad wyższymi procesami poznawczymi.',
                'Dysponujemy funkcjonalnym spektroskopem w bliskiej podczerwieni NIRScoutX, zawierającym 48 kanałów emisyjnych oraz 32 kanały detekcyjne. W porównaniu z funkcjonalnym rezonansem magnetycznym (fMRI), fNIRS charakteryzuje się wyższą rozdzielczością czasową oraz mniejszą wrażliwością na artefakty ruchowe. Z kolei w zestawieniu z elektroencefalografią (EEG), cechuje się wyższą rozdzielczością przestrzenną oraz odpornością na zakłócenia. Podstawowym ograniczeniem fNIRS jest to, że pozwala na rejestrację zmian aktywności jedynie tych obszarów korowych, które są położone blisko wewnętrznej powierzchni czaszki.',
            ],
            en: []
        }
    },
    electrophysiology: {
        image: electro,
        title: {
            pl: 'Elektrofizjologia',
            en: '',
        },
        paragraphs: {
            pl: [
                'Elektroencefalografia (EEG) pozwala na nieinwazyjną rejestrację aktywności bioelektrycznej mózgu z bardzo dużą rozdzielczością czasową. Pomiar realizowany jest przy użyciu zestawu elektrod, rejestrujących zmiany potencjałów elektrycznych na powierzchni skóry głowy oraz dodatkowych elektrod peryferyjnych. Oprócz zmian w aktywności bioelektrycznej mózgu, rejestrujemy zmiany w czynności elektrycznej mięśni i nerwów obwodowych (EMG), mięśnia sercowego (EKG), a ponadto w przebiegu reakcji skórno-galwanicznej (GSR). Ponadto, możliwe jest prowadzenie badań polisomnograficznych oraz innych badań nad snem.',
                'Dysponujemy kilkoma systemami BioSemi ActiveTwo, rejestrującymi do 64 kanałów EEG + 8 kanałów peryferycznych, kilkoma urządzeniami EMG, EKG i GSR, a także aparatem do diagnostyki snu Comet PSG Grass Technologies, pozwalającym na jednoczesny pomiar EEG, EOG i EMG, a także EKG i wysycenia krwi tlenem.',
            ],
            en: []
        }
    },
    electricStimulation: {
        image: stimulation,
        title: {
            pl: 'Stymulacja elektryczna',
            en: '',
        },
        paragraphs: {
            pl: [
                'Wykorzystujemy nieinwazyjne metody stymulacji mózgu: przezczaszkową stymulację magnetyczną (TMS) i przezczaszkową stymulację prądem stałym (tDCS) i zmiennym (tACS). TMS opiera się indukcji elektromagnetycznej, tDCS i tACS to metody stymulacji elektrycznej. Obydwie metody prowadzą do zmiany aktywności neuronalnej obszaru znajdującego się pod cewką/elektrodami. Pozwala to na bezinwazyjną ingerencję w działanie obszarów mózgu, będących przedmiotem zainteresowania badaczy. Niniejsze urządzenie umożliwia badania jak krótkotrwałe zmiany aktywności określonych struktur mózgowych wpływają na przebieg procesów przetwarzania informacji. ',
                'Dysponujemy stymulatorem magnetycznym Magstim Super Rapid2 Plus1 z kilkoma cewkami, stojakami na cewki, aparatem StarStim umożliwiającym 8 kanałową stymulację prądem tdCS-tACS oraz 8 kanałowy pomiar EEG, a także dedykowanym fotelem do stymulacji mózgu.  Posiadamy neuronawigację Brainsight oraz skomunikowany ze stymulatorem komputer do prezentacji bodźców.',
            ],
            en: []
        }
    },
    touchSeeHear: {
        image: other,
        title: {
            pl: 'dotyk, wzrok, słuch',
            en: '',
        },
        paragraphs: {
            pl: [
                'Prowadzimy szeroki zakres badań eksperymentalnych nad percepcją,  pamięcią i modyfikacją doznań bólowych, substytucją sensoryczną i rywalizacją obuoczną. W tym celu stosujemy szeroki wachlarz urządzeń pozwalających na dostarczanie bodźców do wszystkich zmysłów człowieka. ',
                'Dysponujemy specjalistycznymi urządzeniami umożliwiającymi wywoływanie doznań bólowych poprzez aplikację bodźców elektrycznych (Constant Current High Voltage Stimulator firmy Digitimer), bodźców termicznych (Pathway Pain & Sensory Evaluation System firmy Medoc, model ATS) oraz bodźców uciskowych (Commander Algometer Pain Evaluation Tool firmy JTech Medical). Dodatkowo posiadamy stymulatory do prezentacji bodźców dotykowych. Posiadamy urządzenia do substytucji sensorycznej, takie jak <Colorophone>.... W celu rywalizacji obuocznej korzystamy z aparatu Oculus Rift. ',
                'Metody badawcze takie okulografia, pozwajająca na śledzenia punktu skupienia wzroku, ruchów gałki ocznej oraz rozmiaru źrenicy osoby badanej. Zajmujemy się też badaniem emocji. Często wykorzystujemy zadania eksperymentalne sterowane za pomocą komputera, tj. oprogramowanie stosowane w tych badaniach steruje precyzyjną ekspozycją bodźców oraz pomiarem poprawności i czasu reakcji.',
                'Dysponujemy okulografem okulograf (EyeLink 1000), sprzęt i oprogramowanie do analizy danych obserwacyjnych oraz automatycznego rozpoznawania emocji (Observer XT, Face reader), urządzenie do pomiaru aktywności sercowo-naczyniowej (Finometr MIDI), licznymi stacjami komputerowymi do prowadzenia badań behawioralnych',
            ],
            en: []
        }
    },
    other: {
        image: mri,
        title: {
            pl: 'rezonans magnetyczny',
            en: '',
        },
        paragraphs: {
            pl: [
                ''
            ],
            en: []
        }
    },
}