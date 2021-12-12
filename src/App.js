import './App.css';
import { Component } from 'react';
import Header from './components/common/Header/Header';
import Banner from './components/common/Banner/Banner';
import Spacer from './components/common/Spacer/Spacer';
import bannerbg from './bannerbg.jpg'
import Thump from './components/home/Thumb/Thump';
import advertisements from './data/advertisements';
import Footer from './components/common/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/> 
        <Spacer height="63"/>
        <Banner bgImage = {bannerbg}  message= "Chez vous, partout et ailleurs" />
        <Spacer height="43"/>
        <div className='thumbs-container'>
          {advertisements.map(e => <Thump key={e.id} tilte={e.title} image={e.cover}/>)}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
