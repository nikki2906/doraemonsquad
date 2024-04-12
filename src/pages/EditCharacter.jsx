import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import './EditCharacter.css'

const EditCharacter = () => {
    const {id} = useParams();
    const [crewmates, setCrewmates] = useState({
        id: null, 
        name: '',
        character: '',
        gadget: '',
        trait: '',
        personal_message: ''
    });
    const [currentCrewmates, setCurrentCrewmates] = useState({
        name: '',
        character: '',
        gadget: '',
        trait: '',
        personal_message: ''
    });
    useEffect(() => {
        const fetchCrewmates = async () => {
            const { data, error } = await supabase
                .from('crewmates')
                .select('*')
                .eq('id', id);
            if(error) {
                console.log(error);
            }
            setCurrentCrewmates(data[0]);
            setCrewmates(data[0]);
        }
        fetchCrewmates();

    }, [id]);
    const handleEditCrewmates = async (event) => {
        event.preventDefault();
        const { error } = await supabase
            .from('crewmates')
            .update(crewmates)
            .eq('id', id);
        (!error) ? alert('successfully updated your character!') : console.log(error);
    }
    console.log(id);

    return(
        <div>
            <h2>Current Character: </h2>
            <h3>Name: {currentCrewmates.name}, Character: {currentCrewmates.character}, </h3>
            <h3>Gadget: {currentCrewmates.gadget}, Trai: {currentCrewmates.trait}</h3>
            <form onSubmit={handleEditCrewmates}>
            <label>
                Name <br/>
                <input type="text" id="name" name="name" value={crewmates.name} onChange={(e) => setCrewmates({...crewmates, name: e.target.value})}/>
            </label> <br/>
            <label>
                Character <br/>
                <select value={crewmates.character} onChange={(e) => setCrewmates({...crewmates, character: e.target.value})}>
                        <option value='Doreamon'>Doreamon</option>
                        <option value='Dorami'>Dorami</option>
                        <option value='Nobita'>Nobita</option>
                        <option value='Shizuka'>Shizuka</option>
                        <option value='Chaein'>Chaein</option>
                        <option value='Suneo'>Suneo</option>  
                    </select> <br/>
            </label> <br/>
            <label>
                Gadget <br/>
                <select value={crewmates.gadget} onChange={(e) => setCrewmates({...crewmates, gadget: e.target.value})}>
                        <option value='Bamboo Copter'>Bamboo Copter</option>
                        <option value='Anywhere Door'>Anywhere Door</option>
                        <option value='Time Machine'>Time Machine</option>
                        <option value='Memory Bread'>Memory Bread</option>
                        <option value='Super Gourmet Spice'>Super Gourmet Spice</option>
                        <option value='Translation Jelly '>Cinnamoroll</option>
                        <option value='Tunnel Digging '>Tunnel Digging</option>
                        <option value='Mending Putty'>Mending Putty</option>
                        <option value='Translation Jelly'>Translation Jelly</option>
                        <option value='Invisible Cape'>Invisible Cape</option>
                        <option value='Air Cannon'>Air Cannon</option>
                        <option value='Fanta Glasses'>Fanta Glasses</option>
                        <option value='Hypnotizing Megaphone'>Hypnotizing Megaphone</option>
                    </select> <br/>
            </label> <br/>
            <label>
                    Personal Message <br/>
                    <textarea name="bio" value={crewmates.personal_message} onChange={(e) => setCrewmates({...crewmates, personal_message: e.target.value})} rows={15} cols={50}/> <br/>
                </label>
                {<button type="submit">Create your character!</button>}
            </form>

        </div>
    )
}

export default EditCharacter;