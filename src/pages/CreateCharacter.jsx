import { supabase } from '../client.js'
import { useEffect, useState } from 'react'

const CreateCharacter = () => { 
    const [crewmates, setCrewmates] = useState({
        name: '',
        character: '',
        gadget: '',
        trait: '',
        personal_message: ''
    })

    const handleCrewmatesCreation = async (event) => {
        event.preventDefault();
        await supabase
            .from('crewmates')
            .insert({name: crewmates.name, character: crewmates.character, gadget: crewmates.gadget, trait: crewmates.trait, personal_message: crewmates.personal_message })
            .select();
        window.location = "/";
    }
    return (
        <div className="character-form">
            <form onSubmit={handleCrewmatesCreation}>
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
                        <option value='Hopter'>Hopter</option>
                        <option value='Anywhere Door'>Anywhere Door</option>
                        <option value='Time Machine'>Time Machine</option>
                        <option value='Memory Bread'>Memory Bread</option>
                        <option value='Super Gourmet Spice'>Super Gourmet Spice</option>
                        <option value='Translation Jelly '>Cinnamoroll</option>
                        <option value='Tunnel Digging '>Tunnel Digging</option>
                        <option value='Mending Putty'>Mending Putty</option>
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

export default CreateCharacter;