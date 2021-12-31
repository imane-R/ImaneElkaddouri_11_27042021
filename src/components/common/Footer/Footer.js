import './Footer.css';
import { Component } from "react";
import logo from "./logo-footer.png"
export default class Footer extends Component {
    render(){
        return <footer>
            <div className='logo'>
                <img src={logo} alt = 'logo' />
            </div>         
              <div>
                <div className='text-footer'>© 2020 Kasa. All rights reserved</div>
            </div>
            
        </footer>
    }
    
}