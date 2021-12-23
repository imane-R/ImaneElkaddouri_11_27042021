
import { Component } from 'react';
import './Carrousel.css'
import arrowLeft from "./arrow-left.png"
import arrowRight from "./arrow-right.png"
import arrowRightPhone from "./arrow-right-phone.png"
import arrowleftPhone from "./arrow-left-phone.png"


export default class Carrousel extends Component {
    constructor(props) {
        super(props);
        this.pictures = props.pictures;
        this.state = {
            currentIndex: 0,
        }
    }
    render() {
        return <div className='Carrousel'>
            <img className='carrousel-picture' src={this.pictures[this.state.currentIndex]} alt='' />
            <div className='picturenumber'> {this.state.currentIndex + 1} / {this.pictures.length}</div>
            {this.pictures.length > 1 ? <button className='button-left' onClick={this.previousPicture}>
                <img className='button-desktop' src={arrowLeft} alt="" />
                <img className='button-phone' src={arrowleftPhone} alt="" />
            </button> : null}
            {this.pictures.length > 1 ? <button className='button-right' onClick={this.nextPicture} >
                <img className='button-desktop' src={arrowRight} alt="" />
                <img className='button-phone' src={arrowRightPhone} alt="" />
            </button> : null}
        </div>
    }
    nextPicture = () => {
        return this.setState((state, props) => {
            let nextIndex;
            if (state.currentIndex === props.pictures.length - 1) {
                nextIndex = 0;
            } else {
                nextIndex = state.currentIndex + 1;
            }

            return { currentIndex: nextIndex }

        })

    }
    previousPicture = () => {
        return this.setState((state, props) => {
            let previousIndex;
            if (state.currentIndex === 0) {
                previousIndex = props.pictures.length - 1;
            } else {
                previousIndex = state.currentIndex - 1;
            }

            return { currentIndex: previousIndex }

        })
    }
}
