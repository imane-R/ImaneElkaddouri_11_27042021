import './Thumb.css';
import { Component } from 'react';
export default class Thump extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.image = props.image;
    }
    render() {
        return <div className='Thump' style={{ backgroundImage: `url(${this.image})` }}>
            <div className='title'> {this.title}</div>
        </div>
    }
}