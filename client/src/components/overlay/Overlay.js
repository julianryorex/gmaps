/* global google */
import React from 'react';
import { GroundOverlay } from 'react-google-maps';



export default class Overlay extends React.Component {

    constructor(props) {        
        super(props);
        this.state = {
            topLeft: { lat: 46.331781, lng: -112.712787 },
            bottomRight: { lat: 41.733231, lng: -107.326686 }
        };
      
    
    }

    render() {
        return(
            <GroundOverlay
            defaultUrl="./assets/overlay_sample.png"
                defaultBounds={new google.maps.LatLngBounds(
                    new google.maps.LatLng(41.733231, -112.712787),
                    new google.maps.LatLng(46.331781, -107.326686)
                )}
            defaultOpacity={.5}
            />
        );
    }
}