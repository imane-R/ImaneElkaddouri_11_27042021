import './About.css'
import { Component } from "react";
import Banner from '../common/Banner/Banner';
import Spacer from '../common/Spacer/Spacer';
import bannerBg from './bannerBg.jpg';
import Collapse from "../common/Collapse/Collapse";

export default class About extends Component {
    render() {
        return (
            <div className="Home">
                <Spacer height="63" />
                <Banner bgImage={bannerBg} />
                <Spacer height="43" />
                <div className="collapse-container">
                    <Collapse title="Fiabilité">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </Collapse>
                    <Spacer height="43" />
                    <Collapse title="Fiabilité">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </Collapse>
                    <Spacer height="43" />
                    <Collapse title="Fiabilité">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </Collapse>
                    <Spacer height="43" />
                    <Collapse title="Fiabilité">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </Collapse>
                    <Spacer height="43" />
                    <Collapse title="Fiabilité">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </Collapse>
                    <Spacer height="43" />
                </div>
            </div>
        );
    }

}