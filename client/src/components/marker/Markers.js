import React from 'react';
import { Marker } from "react-google-maps"
import SITES from '../../assets/sites.json';


class Markers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            legendInfo: props.data,
            markers: []
        };
        console.log("Inside Markers:");
        console.log(props);
        this.getMarkers();
    }

    getMarkers() {
        // turn this into a fetch
        const sites = SITES;
        console.log(typeof sites)
       

    }

    render() {
        return(
            <div>MARKERS</div>
        );
    }


}

export default Markers;