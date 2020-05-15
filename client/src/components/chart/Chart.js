import React, { Component } from 'react';
import * as JSC from "jscharting";
import Skeleton from "@yisheng90/react-loading";
import './chart.css';


export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };

    }

    componentDidMount() {
        let thisChart = this;

        fetch('https://raw.githubusercontent.com/julianryorex/EPIIC-Project/master/docs/assets/ee-chart.csv')

            .then(function (response) {
                return response.text();
            })
            .then(function (text) {
                let series = csvToSeries(text);

                thisChart.setState({ loading: false });
                renderChart(series);

            })
            .catch(function (error) {
                console.log(error);
            });


        function csvToSeries(text) {
            const date = "system:time_start";
            let dataAsJson = JSC.csv2Json(text);
            let dataPoints = [];
            dataAsJson.forEach(function (row) {
                const newDate = new Date(row[date]);
                const d = newDate.getDate();
                const month = newDate.getMonth();
                const adjMonth = month + 1;
                const year = newDate.getFullYear();
                const dateStr = adjMonth + "/" + d + "/" + year;
                dataPoints.push({ x: dateStr, y: row.NDVI });
            });
            return [
                { name: 'NDVI', points: dataPoints }
            ];
        }

        function renderChart(series) {
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
                    label_text: 'Normalized Difference Vegetation Index'
                },
                xAxis: {
                    label_text: 'Collected Date',
                    scale: {
                        type: 'time',
                        interval: { unit: 'year' },
                        range_padding: 0
                    }
                },
                xAxis_crosshair_enabled: true,
                defaultPoint_tooltip: 'NDVI: <b>%yValue</b>',
                series: series
            });
        }
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
