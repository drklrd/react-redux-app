import React , { Component} from 'react';
import ReactDOM from 'react-dom';

const position = [51.505, -0.09];

export default class LMap extends Component{

    componentDidMount(){
        var map = this.map = L.map(ReactDOM.findDOMNode(this.refs['map'])).setView([this.props.lat, this.props.lon], 11);
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
    }

    render(){
        return(
            <div>
                <div ref="map" className="map"/>
            </div>
        );
    }
}
