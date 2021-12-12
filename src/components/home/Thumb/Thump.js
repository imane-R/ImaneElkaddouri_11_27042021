import './Thumb.css';
import { Component } from 'react';
export default class Thump extends Component {
    constructor(props) {
        super(props);
        this.tilte = props.tilte;
        this.image = props.image;
    }
    render() {
        return <div className='thump' style={{ backgroundImage: `url(${this.image})` }}>
            <div className='title'> {this.tilte}</div>
        </div>
    }
}