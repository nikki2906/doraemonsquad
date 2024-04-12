import CreateCharacter from "./CreateCharacter";
import './CharacterCreation.css'
export default function CharacterCreation() {
    return(
        <div className='char-creation-container'>
            <CreateCharacter/>
            <img className='img-background' src='../../../asset/group.png'/>
        </div>
    );
}