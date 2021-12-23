import './Header.css'
import { Component } from 'react';
import Logo from './logo.png';
import { Link } from 'react-router-dom';
export default class Header extends Component {

    render() {
        return <header>
            <div>
                <Link to="/">
                    <img src={Logo} alt='logo' />
                </Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            A Propos
                        </Link>
                    </li>
                </ul>
            </div>

        </header>
    }

}