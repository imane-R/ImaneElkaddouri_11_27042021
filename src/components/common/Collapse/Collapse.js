import './Collapse.css';
import { Component } from 'react';
export default class Collapse  extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.children = props.children;
        this.state = {
            isOpen: false
        }
    }
    render() {
        return <div className='Collapse'>
            <div className='header' onClick={() => this.setState({isOpen : !this.state.isOpen})}> {this.title}</div>
            {this.state.isOpen  && <div className="body">{this.children}</div>}
        </div>
    }
}