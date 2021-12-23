
import { Component } from "react";
import './Tag.css'

class Tag extends Component {
  constructor(props) {
    super(props);
    this.tags = props.tags;
  }
  render() {
    return (
      <ul className="Tag">
        {this.tags.map((tag, index) => <li key={index} className='tag'>{tag}</li>)}
      </ul>
    );
  }
}

export default Tag;