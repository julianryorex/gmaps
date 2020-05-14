import React from 'react';
import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import { compose, withProps } from "recompose"
import Legend from "./components/legend/Legend";
import Markers from "./components/marker/Markers";

// helper function
const getCenter = () => {

	const top_left = {lat: 46.331781, lng: -112.712787};
	const bottom_right = {lat: 41.733231, lng: -107.326686};

	const midpoint = {lat: (0.5*(top_left.lat + bottom_right.lat)), lng: (0.5*(top_left.lng + bottom_right.lng))};
	return midpoint;
}

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
		defaultCenter={{lat: 0, lng: 0 }}
		center={getCenter()}
	>
		 {props.isMarkerShown && <Markers />}
	</GoogleMap>
);

// ----------------------------------------------------------------------------------------------------------------


export default class MapContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			legend: null, 
			isMarkerShown: false
		};

		// function bindings
		this.legendChecked = this.legendChecked.bind(this);
		this.markerValidation = this.markerValidation.bind(this);
	}

	// double checks if any of the checkboxes are checked.
	markerValidation() {
		let data = { success: false, data: [] };

		if (!this.state.legend)
			return data;

		if (this.state.legend.sites === true) {
			data.success = true;
			data.data.push('sites');
		}

		if (this.state.legend.active_fires === true) {
			data.success = true;
			data.data.push('active_fires');
		}

		if (this.state.legend.firescape === true) {
			data.success = true;
			data.data.push('firescape');
		}
		return data;
	}

	// called every time a checkbox is checked/unchecked
	async legendChecked(currentLegendState) {
		console.log("legendChecked called");
		await this.setState({legend: currentLegendState});
		const validMarkers = this.markerValidation();
		console.log(validMarkers);
		if (validMarkers.success) 
			await this.setState({ isMarkerShown: true });
		
		else 
			await this.setState({ isMarkerShown: false });
		
		
		console.log(validMarkers.data);
		await console.log("isMarkerShown " + this.state.isMarkerShown)
	}

	render() {
		return (
			<div id='master'>
				<Legend parentCallback={this.legendChecked} />
				<div style={{ width: '100vw', height: '100vh' }}>
					<MyMapComponent
						isMarkerShown={this.state.isMarkerShown}
						onMarkerClick={this.handleMarkerClick}
					>
						<Marker position={{ lat: 45.676998, lng: -111.042931 }} />
						{console.log("INIDE RENDER MAP")}
					</MyMapComponent>
				</div>
			</div>
		);

	}

	

 	

}






