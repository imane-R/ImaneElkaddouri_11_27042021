import './Collapse.css';
import { Component } from 'react';
import  arrow from './arrow.png';
export default class Collapse  extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.children = props.children;
        this.state = {
            isOpen: false,
        }
    }
    render() {
        return <div className='Collapse'>
            <div className='header' onClick={() => this.setState((state) => ({isOpen : !state.isOpen  }))}> {this.title} <img className={`arrow ${this.state.isOpen ? 'up' : 'down'}`} src= {arrow} alt ='arrow'></img></div>
            {this.state.isOpen  && <div className="body">{this.children}</div>}
        </div>
    }
}