
import { Component } from 'react';
import Spacer from '../common/Spacer/Spacer';
import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
        <div className="NotFound">
            <Spacer height="43" />
           <div className='error404'>404</div>
           <div className='error-message'>Oups! La page que vous demandez n'existe pas.</div>
           <Spacer height="182" />
           <div className='linkToHome'><a href='/'>Retourner sur la page d’accueil</a></div>
           <Spacer height="159" />
        </div>
    );
  }
}

export default NotFound;
