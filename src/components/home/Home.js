import './Home.css';
import { Component } from 'react';
import Banner from '../common/Banner/Banner';
import Spacer from '../common/Spacer/Spacer';
import bannerBg from './bannerBg.jpg';
import Thump from './Thumb/Thump';
import advertisements from '../../data/advertisements';

class Home extends Component {
  render() {
    return (
        <div className="Home">
          <Spacer height="63" />
          <Banner bgImage={bannerBg} message="Chez vous, partout et ailleurs" />
          <Spacer height="43" />
          <div className='thumbs-container'>
            {advertisements.map(e => <Thump key={e.id} title={e.title} image={e.cover} />)}
          </div>
        </div>
    );
  }
}

export default Home;
