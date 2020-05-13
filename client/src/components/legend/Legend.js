import React from 'react';
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"
import './legend.css'


class Legend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sites: false,
            firescape: false,
            active_fires: false
        };
        this.checked = this.checked.bind(this);
    }

    checked(type) {
        switch (type) {
            case 'firescape':
                (this.state.firescape === false) ? this.setState({ firescape: true }) : this.setState({ firescape: false });
                break;
            case 'sites':
                (this.state.sites === false) ? this.setState({ sites: true }) : this.setState({ sites: false });
                break;
            case 'active_fires':
                (this.state.active_fires === false) ? this.setState({ active_fires: true }) : this.setState({ active_fires: false });
                break;
            default:
                console.log("default");
                break;
        }
        this.props.parentCallback(this.state);
        console.log(this.state);
    }

    render() {
        return(
            <div id="legend" style={{width: '15vw', height: '100vh', float: "left"}} >
                <h4>Google Map Overlays</h4>
                <input type="checkbox" id="sites" onChange={() => this.checked('sites')} />
                <label className="check-label" forhtml="sites">Get Sites</label>
                <br />
                <input type="checkbox" id="firescape-sensors" onChange={() => this.checked('firescape')} />
                <label className="check-label" forhtml="firescape-sensors">Firescape Sensors</label>
                <br />
                <input type="checkbox" id="active-fires" onChange={() => this.checked('active_fires')} />
                <label className="check-label" forhtml="active-fires">Active Fires</label>
                <br />
                <p>*Data is fictional</p>
            </div>

        );
    }
}

export default Legend;


// const Legend = () => {

//     // need to make a legend
//     var legend = document.createElement('div');
//     legend.id = 'legend';
//     var content = [];
//     content.push('<h3>Butterflies*</h3>');
//     content.push('<p><div class="color red"></div>Battus</p>');
//     content.push('<p><div class="color yellow"></div>Speyeria</p>');
//     content.push('<p><div class="color green"></div>Papilio</p>');
//     content.push('<p><div class="color blue"></div>Limenitis</p>');
//     content.push('<p><div class="color purple"></div>Myscelia</p>');
//     content.push('<p>*Data is fictional</p>');
//     legend.innerHTML = content.join('');
//     legend.index = 1;
//     controlPosition = { google.maps.ControlPosition.TOP_LEFT }

// }