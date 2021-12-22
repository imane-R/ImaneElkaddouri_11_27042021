import { Component } from "react";
import './Host.css'


class Host extends Component {
    constructor(props) {
      super(props);
      this.host = props.host;
  }
      render() {
        return (
            <div className="Host">
                <div className="host-name" >{this.host.name} </div>
                <img className="host-image" src={this.host.picture} alt=""/>
            </div>
        );
      }
    }
    
    export default  Host;