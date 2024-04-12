import { Outlet, Link } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
    return(
        <>
            <nav className='nav-bar'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/character-creation'>Create a Character</Link>                    
                    </li>
                    <li>
                        <Link to='/character-gallery'>Characters Gallery</Link>                    
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}