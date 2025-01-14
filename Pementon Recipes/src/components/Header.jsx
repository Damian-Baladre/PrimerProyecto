import {useState} from 'react'
import { HiSearch } from 'react-icons/hi'; 
import { Categories } from './Categories';
import { Link } from 'react-router-dom'

export function Header ({changeSearch}) {

    const [prevSearch, setPrevSearch] = useState('');

    const change = (value) => {
        console.log("Set search:" + value);
        setPrevSearch(value);
    }

    return(
        <div className='header-container'>
            <Link to="/" className="logo-container" >
                <img src="logo.png" alt="logo pementon" />
            </Link>
        <div className="form-data container">
            <input
                type="text"
                placeholder="Buscar receta"
                className="input"
                value={ prevSearch }
                onChange= {(e) => change(e.target.value) }
            />
            <button className="button" onClick={ () => changeSearch(prevSearch) }><HiSearch size={18} /></button>
        </div>
        <Categories />
        </div>
    );
}