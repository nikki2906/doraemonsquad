import { supabase } from "../client.js";
import { useEffect, useState } from 'react'
import CharacterCard from "./CharacterCard";
import './CharacterGallery.css'
export default function CharacterGallery() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchCharacters = async() => {
            const { data, error } = await supabase
                .from('crewmates')
                .select()
                if (error) {
                    console.error("Error fetching data:", error);
                    return;
                }
            setData(data);
        }
        fetchCharacters();
    }, []);
    console.log(data)
    return(
        <div>
            <div className='gallery-header'>
                <h1>Doreameon world</h1>
                <h3>Say hello to all of your fellow townies and get to know them!</h3>
            </div>
            <div className='gallery-container'>
            {
                data && data.length > 0 ? data.map((char) => (
                    <CharacterCard key={char.id} character={char} />
                )) : <h3>no townies at the moment!</h3>
            }

            </div>
        </div>
    );
}