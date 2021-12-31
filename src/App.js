import './App.css';
import { Component } from 'react';
import Header from './components/common/Header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/common/Footer/Footer';
import NotFound from './components/notFound/NotFound';
import HousingSheet from './components/housingSheet/HousingSheet';
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Header activeLink='home'/>}/>
            <Route path="/about" element={<Header activeLink='about'/>}/>
            <Route path="*" element={<Header />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path='/housingSheet/:id' element={<HousingSheet />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
