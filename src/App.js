import './App.css';
import { Component } from 'react';
import Header from './components/common/Header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/common/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
