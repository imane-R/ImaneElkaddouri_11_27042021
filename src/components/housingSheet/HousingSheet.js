import './HousingSheet.css'
import { Component } from "react";
import Collapse from "../common/Collapse/Collapse";
import Spacer from '../common/Spacer/Spacer';
import Carrousel from './Carrousel/Carrousel';
import Tag from './Tag/Tag';
import advertisements from '../../data/advertisements';
import Host from './Host/Host';
import Rating from './Rating/Rating';


let urlId = window.location.href.split('/').pop();
let currentAdvertisements = advertisements.filter((advertisement) => advertisement.id === urlId)[0];

if (currentAdvertisements === undefined) {
    //window.location.href = '/'
}

class HousingSheet extends Component {
    render() {
        return (
            <div className="HousingSheet">
                <Spacer height="37"/>
                <Carrousel pictures={currentAdvertisements.pictures} />
                <Spacer height="43" />
                <div className='tile-host'>
                    <h1 className='title'>{currentAdvertisements.title}</h1>
                    <Host host={currentAdvertisements.host} />
                </div>
                <div className='location'>{currentAdvertisements.location}</div>
                <div className='tags-ratings'>
                    <Tag tags={currentAdvertisements.tags} />
                    <Rating rating={currentAdvertisements.rating} />
                </div>
                <div className='HousingSheet-collapse'>
                    <Collapse title="Description" >
                        <p>{currentAdvertisements.description}</p>
                    </Collapse>
                    <Spacer height="43"/>
                    <Collapse title="Équipements">
                        <ul className='equipments'>{currentAdvertisements.equipments.map((equipment, index) => <li key={index} className='equipment'>{equipment}</li>)}</ul>
                    </Collapse>
                </div>
                <Spacer height="43" />
            </div>
        );
    }
}

export default HousingSheet;
