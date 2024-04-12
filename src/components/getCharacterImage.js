import Doramemon from '../assets/doraemon.png';
import Dorami from '../assets/dorami.png';
import Nobita from '../assets/nobita.png';
import Shizuka from '../assets/shizuka.png';
import Suneo from '../assets/suneo.png';
import Chaien from '../assets/chaien.png';

export const getCharacterImage = (character) => {
    switch(character) {
        case 'Doramemon':
            return Doramemon;
        case 'Dorami':
            return Dorami;
        case 'Nobita':
            return Nobita;
        case 'Shizuka':
            return Shizuka;
        case 'Suneo':
            return Suneo;
        case 'Chaien':
            return Chaien;
        default:
            return null;
    }
}
