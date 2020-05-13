import React from 'react';
import { Marker } from "react-google-maps"


class Markers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            legendInfo: props.data
        };
        console.log("Inside Markers:");
        console.log(props);
    }


}

export default Markers;