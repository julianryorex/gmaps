import React from 'react';
import SITES from '../../assets/sites.json';
import { Marker, InfoWindow } from 'react-google-maps';
import './markers.css';


class Markers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            legendInfo: props.data,
            markers: props.data.markerArray,
            selectedMarker: null
        };
    }
    
    /**
     * @author Julian
     * This is the place to experiment with the fetch. To see if the fetch works, 
     * check the browser console (F12) to see the various logs. 
     * If successful, 'Fetched Data' + the data will show in the logs
     * If unsuccessful, "ERROR HAS OCCURED" will show up in the log as an error message.
     * This can mean many things: 
     * - CORS is not enabled
     * - problem connecting to server
     * - connection successful but parsing problem (I can fix this problem)
     * - Other connection issues.
     * 
     * Currently, It is hardcoded so that all checkboxes will return the JSON file data. 
     * This can be changed on line 56 of this file.
     */
    getMarkers() {
        const currentMarkers = this.state.markers;
        currentMarkers.forEach((marker) => {
           switch(marker) {
               case 'sites':
                   console.log("inside switch sites");
                   fetch('http://epiic-fa01-prod.azurewebsites.net/api/sites')
                   .then(response => response.json())
                   .then(data => {
                       console.log("Fetched data:");
                       console.log(data);
                   })
                   .catch(e => {
                       console.error("ERROR HAS OCCURED");
                       console.error(e);
                   });
                   break;

                default:
                    console.log("default case");
            }
        });

        const sites = SITES; // temp option to parse JSON file
        return this.getSites(sites); 
    }

    getSites(sites) {
        
        const newList = sites.map( site => 
            
            <Marker 
                key={site.amphoraid || site.id} // might change later if ID problems occur
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
        return newList;
        
    }


    render() {
        const markerData = this.getMarkers();
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