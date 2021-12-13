import { Component } from "react";

export default class Spacer extends Component {
    constructor(props) {
        super(props);
        this.height = props.height; 
        this.state = {
            responsiveHeight : this.height  * window.innerWidth / 1680
        };
    }
    render() {
        return <div className="Spacer" style={{ height: `${this.state.responsiveHeight}px` }}></div>
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }


    updateDimensions = () => {
        console.log('updateDimensions')
        this.setState({
            responsiveHeight : this.height  * window.innerWidth / 1680
        });
    }
}