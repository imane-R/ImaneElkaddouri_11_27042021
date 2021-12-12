import './Header.css'
import { Component } from 'react';
import Logo from './logo.png';

export default class Header extends Component {
    render(){
        return <header>
            <div>
                <img src={Logo} alt = 'logo' />
            </div>
            <div>
                <ul>
                    <li>
                      <a href='/'>Accueil</a>  
                    </li>
                    <li>
                      <a href='/'>A Propos</a> 
                    </li>
                </ul>
            </div>
            
        </header>
    }
    
}