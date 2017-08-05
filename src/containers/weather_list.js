import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import LMap from '../components/map';

class WeatherList extends Component{

    renderWeather(cityData){
        const name = cityData.city.name;
        const temperatures = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather=>weather.main.pressure);
        const humidities = cityData.list.map(weather=>weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return(
                <tr key={name}>
                    <td>
                        <LMap lat={lat} lon={lon} />
                    </td>
                    <td>
                        {name}
                    </td>
                    <td>
                        <Chart data={temperatures} color="red" referenceType="avg" units="K" />
                    </td>
                    <td>
                        <Chart data={pressures} color="orange"  referenceType="avg" units="hPa"/>
                    </td>
                    <td>
                        <Chart data={humidities} color="green"  referenceType="avg"  units="%"/>
                    </td>
                </tr>
        );
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Map</th>
                        <th>City</th>
                        <th>Temperature (K) </th>
                        <th>Pressure (hPa) </th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }){ // ES6!!!!!!
    return {
        weather
    };
}

export default connect(mapStateToProps)(WeatherList);
