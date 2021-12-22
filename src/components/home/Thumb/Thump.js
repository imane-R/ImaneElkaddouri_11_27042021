import './Thumb.css';
import { Component } from 'react';
export default class Thump extends Component {
    constructor(props, context) {
        super(props);
        this.title = props.title;
        this.image = props.image;
        this.id = props.id
    }
    render() {
        return <div className='Thump' style={{ backgroundImage: `url(${this.image})` }} onClick={ () => {
            window.location.href= `/housingSheet/${this.id}`;
        }} >
            <div className='title'> {this.title}</div>
        </div>
    }
}