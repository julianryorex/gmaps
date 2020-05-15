import React from 'react';
import SITES from '../../assets/sites.json';
import { Marker, InfoWindow } from 'react-google-maps';
import './markers.css';

// i wanna know what marker I wanna show. To know this, there is an array that is passed 


class Markers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            legendInfo: props.data,
            markers: props.data.markerArray,
            selectedMarker: null
        };
        console.log("Inside Markers.js:");
        console.log(this.props);
        console.log(this.state);
        // this.getMarkers(); // move this to render
    }

    getMarkers() {
        // const currentMarkers = this.state.markers;
    //    currentMarkers.forEach((marker) => {
    //        switch(marker) {
    //            case 'sites':
    //                fetch ....
    //        }
    //    });
        const sites = SITES; // temp
        return this.getSites(sites); 
    }

    getSites(sites) {
        
        const newList = sites.map( site => 
            
            <Marker 
                key={site.amphoraid || site.id} // might change later
                position={{
                    lat: parseFloat(site.latitude),
                    lng: parseFloat(site.longitude)
                }}
                onClick={() => {
                    this.setState({
                        selectedMarker: site
                    });
                }}
            />
        );

        console.log(newList);
        return newList;
        
    }


    render() {
        const markerData = this.getMarkers(); // move this to render
        console.log(typeof markerData);
        if(this.state.selectedMarker) {
            console.log(this.state.selectedMarker);
            console.log(this.state.selectedMarker);
        }
        return(
            <>
            { markerData }

            { this.state.selectedMarker && (
            <InfoWindow
                position={{
                    lat: parseFloat(this.state.selectedMarker.latitude),
                    lng: parseFloat(this.state.selectedMarker.longitude)
                }}
                onCloseClick={ () => {
                    this.setState({
                        selectedMarker: null
                    });
                }}
                >
                <div id="info-window">
                    <strong>Site Name:</strong>
                    <br />
                    {this.state.selectedMarker.sitename}
                    <br />
                    <strong>Coordinates:</strong>
                    <br />
                    Lat: {this.state.selectedMarker.latitude}&nbsp;&nbsp;
                    Lng: {this.state.selectedMarker.longitude}
                    <br />


                        
                   
                
                </div>
            </InfoWindow>
            )}       
            </>
        );
    }


}

export default Markers;