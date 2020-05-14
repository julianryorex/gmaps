import React from 'react';
// import { Marker } from "react-google-maps"
import SITES from '../../assets/sites.json';

// i wanna know what marker I wanna show. To know this, there is an array that is passed 


class Markers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            legendInfo: props.data,
            markers: props.data.markerArray
        };
        console.log("Inside Markers.js:");
        console.log(this.props);
        console.log(this.state);
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