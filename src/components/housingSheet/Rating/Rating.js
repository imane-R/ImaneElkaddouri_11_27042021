import { Component } from "react";
import './Rating.css'
import emptyStar from "./emptyStar.png"
import fullStar from "./fullStar.png"


class Rating extends Component {
  constructor(props) {
    super(props);
    this.rating = parseInt(props.rating);
  }
  render() {
    return (
      <div className="Rating">
        {[...Array(this.rating)].map((x, index) =>
          <img key={index} className="rating-star" src={fullStar} alt="" />
        )}
        {[...Array(5 - this.rating)].map((x, index) =>
          <img  key={index} className="rating-star" src={emptyStar} alt="" />
        )}
      </div>
    );
  }
}

export default Rating;