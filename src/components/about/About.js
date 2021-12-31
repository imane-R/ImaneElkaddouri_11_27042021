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
                <div className='Banner-desktop'>
                <Banner bgImage={bannerBg} />
                </div>
                <div className='Banner-phone'>
                <Banner bgImage={bannerBg} height="223" />
                </div>
                <Spacer height="43" />
                <div className="collapse-container">
                    <Collapse title="Fiabilité">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </Collapse>
                    <Spacer height="43" />
                    <Collapse title="Respect">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </Collapse>
                    <Spacer height="43" />
                    <Collapse title="Service">
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </Collapse>
                    <Spacer height="43" />
                    <Collapse title="Sécurité">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </Collapse>
                    <Spacer height="43" />
                </div>
            </div>
        );
    }

}