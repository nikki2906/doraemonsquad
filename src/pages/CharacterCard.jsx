import './CharacterCard.css'
import { Link } from 'react-router-dom'
import { getCharacterImage } from '../components/getCharacterImage';
export default function CharacterCard( { character } ) {
    const imgURL = getCharacterImage(character.character);
    return(
        <div className='card'>
            <img src={imgURL}/>
            <h2>Name: </h2> 
            <h3>{character.name} <br/></h3>
            <h2>Gadget: </h2>
            <h3>{character.gadget}<br/></h3>
            <Link className='button-link' to={`/character-details/${character.id}`}>Townie Details</Link>
        </div>
    );
}