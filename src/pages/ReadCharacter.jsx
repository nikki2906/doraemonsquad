import { useParams,Link } from "react-router-dom";
import { supabase } from "../client";
import { getCharacterImage } from '../components/getCharacterImage';
import { useEffect, useState } from "react"; 

const ReadCharacter = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({
        name: '',
        character: '',
        gadget: '',
        trait: '',
        personal_message: ''
    });

    useEffect(() => {
        const fetchCharacter = async () => {
            const { data, error } = await supabase
                .from('crewmates')
                .select('*')
                .eq('id', id);
            if(error) {
                console.log(error);
            }
            setCharacter(data[0]);
        }
        fetchCharacter();

    }, [id]);
    const handleDeleteCharacter = async (event) => {
        event.preventDefault();
        await supabase
            .from('crewmates')
            .delete()
            .eq('id', id);
    }
    console.log(character);
    if (!character) return <div>Loading...</div>;
    return(
        <div>
            <img src={getCharacterImage(character.character)}/>
            <h2>Hi! My name is {character.name}.</h2>
            <h2>My current gadget is the {character.gadget}</h2>
            <h2>My message to you is: <br/>{character.personal_message}</h2>
            <button><Link to={`/character-details/edit-character/${id}`}>Edit my profile!</Link></button>
            <button onClick={handleDeleteCharacter}>Leaving town ;D</button>
            </div>
    );
};

export default ReadCharacter;