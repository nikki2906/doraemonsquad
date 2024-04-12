import { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { supabase } from '../client.js';

const CreateCharacter = () => {
    const [crewmates, setCrewmates] = useState({
        name: '',
        character: '',
        gadget: '',
        trait: '',
        personal_message: ''
    });

    const handleCrewmatesCreation = async (event) => {
        event.preventDefault();
        await supabase
            .from('crewmates')
            .insert({ name: crewmates.name, character: crewmates.character, gadget: crewmates.gadget, trait: crewmates.trait, personal_message: crewmates.personal_message })
            .select();
        window.location = "/";
    };

    return (
        <div className="character-form-container" style={{ width: '50%', margin: 'auto', marginTop: '100px' }}>
            <form onSubmit={handleCrewmatesCreation}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="name" shrink={crewmates.name !== ''} focused={crewmates.name !== ''}>Name</InputLabel>
                    <TextField id="name" name="name" value={crewmates.name} onChange={(e) => setCrewmates({ ...crewmates, name: e.target.value })} />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="character" shrink={crewmates.character !== ''} focused={crewmates.character !== ''}>Character</InputLabel>
                    <Select id="character" value={crewmates.character} onChange={(e) => setCrewmates({ ...crewmates, character: e.target.value })}>
                        <MenuItem value='Doreamon'>Doreamon</MenuItem>
                        <MenuItem value='Dorami'>Dorami</MenuItem>
                        <MenuItem value='Nobita'>Nobita</MenuItem>
                        <MenuItem value='Shizuka'>Shizuka</MenuItem>
                        <MenuItem value='Chaein'>Chaein</MenuItem>
                        <MenuItem value='Suneo'>Suneo</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="gadget" shrink={crewmates.gadget !== ''} focused={crewmates.gadget !== ''}>Gadget</InputLabel>
                    <Select id="gadget" value={crewmates.gadget} onChange={(e) => setCrewmates({ ...crewmates, gadget: e.target.value })}>
                        <MenuItem value='Bamboo Copter'>Bamboo Copter</MenuItem>
                        <MenuItem value='Anywhere Door'>Anywhere Door</MenuItem>
                        <MenuItem value='Time Machine'>Time Machine</MenuItem>
                        <MenuItem value='Memory Bread'>Memory Bread</MenuItem>
                        <MenuItem value='Super Gourmet Spice'>Super Gourmet Spice</MenuItem>
                        <MenuItem value='Translation Jelly'>Cinnamoroll</MenuItem>
                        <MenuItem value='Tunnel Digging'>Tunnel Digging</MenuItem>
                        <MenuItem value='Mending Putty'>Mending Putty</MenuItem>
                        <MenuItem value='Translation Jelly'>Translation Jelly</MenuItem>
                        <MenuItem value='Invisible Cape'>Invisible Cape</MenuItem>
                        <MenuItem value='Mending Putty'>Mending Putty</MenuItem>
                        <MenuItem value='Air Cannon'>Air Cannon</MenuItem>
                        <MenuItem value='Fanta Glasses'>Fanta Glasses</MenuItem>
                        <MenuItem value='Hypnotizing Megaphone'>Hypnotizing Megaphone</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="napersonal_messageme" shrink={crewmates.personal_message !== ''} focused={crewmates.personal_message !== ''} >Personal Message</InputLabel>
                    <TextField id="personal_message" name="personal_message" value={crewmates.personal_message} onChange={(e) => setCrewmates({ ...crewmates, personal_message: e.target.value })} multiline rows={4} />
                </FormControl>
                <Button type="submit" variant="contained" color="primary">Create your character!</Button><br />
                <img className='home-img' src='../../src/assets/group2.png' />
            </form>
        </div>
    );
};

export default CreateCharacter;
