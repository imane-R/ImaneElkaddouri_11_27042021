import './Header.css'
import { Component } from 'react';
import Logo from './logo.png';
import { Link } from 'react-router-dom';
export default class Header extends Component {

    render() {
        return <header>
            <div>
                <Link to="/">
                    <img src={Logo} alt='logo'/>
                </Link>
            </div>
            <div>
                <ul>
                    <li>
                        <a href='/'>Accueil</a>
                    </li>
                    <li>
                        <a href='/about'>A Propos</a>
                    </li>
                </ul>
            </div>

        </header>
    }

}