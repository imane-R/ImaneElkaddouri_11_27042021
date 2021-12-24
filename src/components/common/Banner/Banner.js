import './Banner.css'
import { Component } from "react";

export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.message = props.message;
        this.bgImage = props.bgImage;
        this.height = props.height; 
    }

    render() {
        return <div className = 'Banner' style={{ backgroundImage: `url(${this.bgImage})`, height: `${this.height}px` }}>
            
            <div className = 'message-banner'> 
            <div className = 'opacity'></div> 
             {this.message}</div>
        </div>
    }
}