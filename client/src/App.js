import React, {useState} from 'react';
import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import { compose, withProps } from "recompose"
import Legend from "./components/legend/Legend";
import Markers from "./components/marker/Markers";



const MyMapComponent = compose(
	withProps({
		googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`,
		loadingElement: < div style={{ height: `100%` }} />,
		containerElement: < div style = {{ height: `100%` }} />,
		mapElement: < div style = {{ height: `100%` }} />
	}),
	withScriptjs,
	withGoogleMap
)( (props) =>
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat: 45.676998, lng: -111.042931 }}
	>
		{props.isMarkerShown && <Marker position={{ lat: 45.676998, lng: -111.042931 }} onClick={props.onMarkerClick} />}
	</GoogleMap>
);


export default class MapContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {legend: null};
		this.legendChecked = this.legendChecked.bind(this);
	}

	legendChecked(currentLegendState) {
		console.log("Callback");
		console.log("From App.js")
		console.log(currentLegendState);
		this.setState({legend: currentLegendState});
		console.log("state set");
	}

	render() {
		console.log("right before return in render");
		console.log("this.state.legend");
		console.log(this.state.legend);
		return (
			<div id='master'>
				<Legend parentCallback={this.legendChecked} />
				<div style={{ width: '100vw', height: '100vh' }}>
					<MyMapComponent>
						
					</MyMapComponent>
				</div>
			</div>
		);

	}

	

 	

}






