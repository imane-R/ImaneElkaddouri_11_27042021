import './Banner.css'
import { Component } from "react";

export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.message = props.message;
        this.bgImage = props.bgImage;
    }

    render() {
        return <div className = 'banner' style={{ backgroundImage: `url(${this.bgImage})` }}>
            
            <div className = 'message-banner'> 
            <div className = 'opacity'></div> 
             {this.message}</div>
        </div>
    }
}