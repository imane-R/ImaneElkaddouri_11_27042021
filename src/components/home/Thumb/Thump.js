import './Thumb.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Thump extends Component {
    constructor(props, context) {
        super(props);
        this.title = props.title;
        this.image = props.image;
        this.id = props.id
    }
    render() {
        return <Link to={`/housingSheet/${this.id}`}>
            <div className='Thump' style={{ backgroundImage: `url(${this.image})` }}>
                <div className='title'> {this.title}</div>
            </div>
        </Link>
    }
}