import React, { Component } from 'react';
import * as JSC from "jscharting";
import './chart.css';


export default class Chart extends Component {
    
    constructor(props) {
        super(props);

        this.renderChart = this.renderChart.bind(this);

    }

    componentDidMount() {
        fetch('./assets/sensordata.json')
            .then(response => response.json())
            .then(data => {
                data = this.formatData(data);
                this.renderChart(data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    formatData(data) {
        console.log("formatting data");
        console.log(data);
        let dataPoints = [];
        data.forEach(dataObj => dataPoints.push( { x: dataObj.t, y: dataObj.value } ));

        return [ { name: "Water Quantity", points: dataPoints } ];
    }

    renderChart(series) {
        console.log("series");
        console.log(series);
        JSC.Chart('chart', {
            type: 'line',
            title: {
                label: {
                    text: 'Time Series Data',
                    style_fontSize: 16
                },
                position: 'center'
            },
            legend_visible: false,
            yAxis: {
                label_text: 'Water Quantity'
            },
            xAxis: {
                label_text: 'Day',
                defaultMinorTick: {
                    label_style_fontWeight: 'normal',
                    gridLine_color: ['crimson', 0.2]
                },
                defaultTick: {
                    label_style_fontWeight: 'bold',
                    gridLine_color: ['crimson', 0.4]
                },
                // formatString: 'MMM-dd',
                scale: {
                    type: 'time',
                    interval: { 
                        unit: 'day',
                        multiplier: 3 
                    },
                    minorInterval: {
                        unit: 'day',
                        multiplier: 1
                    },

                    range_padding: 0
                }
            },
            xAxis_crosshair_enabled: true,
            defaultPoint_tooltip: `Quantity: <b>%yValue</b><br>`,
            series: series
        });
    }
    

    render() {
        return (
            <div className="chart-div">
                <div
                    id="chart"
                ></div>
                <div className="space"></div>
            </div>
        );
    }
        

}
