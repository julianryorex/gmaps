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

    async checked(type) {
        // console.log("before");
        // console.log(this.state);
        switch (type) {
            case 'sites':
                await (this.state.sites === false) ? this.setState({ sites: true }) : this.setState({ sites: false });
                break;
            case 'firescape':
                await (this.state.firescape === false) ? this.setState({ firescape: true }) : this.setState({ firescape: false });
                break;
            case 'active_fires':
                await (this.state.active_fires === false) ? this.setState({ active_fires: true }) : this.setState({ active_fires: false });
                break;
            default:
                console.log("default");
                break;
        }

        await this.props.parentCallback(this.state);
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
                
            </div>

        );
    }
}

export default Legend;
