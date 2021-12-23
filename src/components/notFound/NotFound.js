
import { Component } from 'react';
import Spacer from '../common/Spacer/Spacer';
import './NotFound.css';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <Spacer height="43" />
        <div className='error404'>404</div>
        <div className='error-message'>Oups! La page que vous demandez n'existe pas.</div>
        <Spacer height="182" />
        <div className='linkToHome'>
          <Link to="/">
            Retourner sur la page d’accueil
          </Link>
        </div>
        <Spacer height="159" />
      </div>
    );
  }
}

export default NotFound;
