import './CharacterCard.css'
import { Link } from 'react-router-dom'
import { getCharacterImage } from '../components/getCharacterImage';
export default function CharacterCard( { character } ) {
    const imgURL = getCharacterImage(character.character);
    return(
        <div className='card'>
            <img src={imgURL}/>
            <h2>Name: {character.name} </h2> 
            <h2>Gadget: {character.gadget}</h2> <br/>
            <Link className='button-link' to={`/character-details/${character.id}`}>Townie Details</Link>
        </div>
    );
}