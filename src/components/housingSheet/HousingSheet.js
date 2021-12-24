import './HousingSheet.css'
import { Component } from "react";
import Collapse from "../common/Collapse/Collapse";
import Spacer from '../common/Spacer/Spacer';
import Carrousel from './Carrousel/Carrousel';
import Tag from './Tag/Tag';
import advertisements from '../../data/advertisements';
import Host from './Host/Host';
import Rating from './Rating/Rating';
import NotFound from '../notFound/NotFound';


class HousingSheet extends Component {

    constructor (props) {
        super(props);
        let urlId = window.location.href.split('/').pop();
        this.currentAdvertisements = advertisements.filter((advertisement) => advertisement.id === urlId)[0];
    }
    render() {
        if (this.currentAdvertisements) {
            return (
                <div className="HousingSheet">
                    <Spacer height="37" />
                    <Carrousel pictures={this.currentAdvertisements.pictures} />
                    <Spacer height="43" />
                    <div className='title-host'>
                        <h1 className='title'>{this.currentAdvertisements.title}</h1>
                        <div className='host-desktop'>
                           <Host host={this.currentAdvertisements.host} />
                        </div>
                    </div>
                    <div className='location'>{this.currentAdvertisements.location}</div>
                    <div className='tags-ratings'>
                        <Tag tags={this.currentAdvertisements.tags} />
                        <Rating rating={this.currentAdvertisements.rating} />
                    </div>
                    <div className='rating-host-phone'>
                        <Rating rating={this.currentAdvertisements.rating} />
                        <Host host={this.currentAdvertisements.host} />
                    </div>
                    <Spacer height="43" />
                    <div className='HousingSheet-collapse'>
                        <Collapse title="Description" >
                            <p>{this.currentAdvertisements.description}</p>
                        </Collapse>
                        <Spacer height="43" />
                        <Collapse title="Équipements">
                            <ul className='equipments'>{this.currentAdvertisements.equipments.map((equipment, index) => <li key={index} className='equipment'>{equipment}</li>)}</ul>
                        </Collapse>
                    </div>
                    <Spacer height="43" />
                </div>
            );
        } else {
            return <NotFound />
        }
    }
}

export default HousingSheet;
