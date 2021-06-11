import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Tooltip} from 'react-bootstrap'

class Maps extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showingInfoWindow: true,
            activeMarker: {},
            selectedPlace: {},
        };
    }
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };
    onMouseoverMarker(props, marker, e) {
        console.log(marker)
    }
    
    getBounds(){
        var bounds = new this.props.google.maps.LatLngBounds();
        for (var i = 0; i < this.props.coordinates.length; i++) {
            let temp = {
                "lat":Number(this.props.coordinates[i]['lat']),
                "lng":Number(this.props.coordinates[i]['lng'])
            }
            bounds.extend(temp);
            return bounds
        }
    }

  render() {
    const {coordinates} = this.props
    console.log(process.env.REACT_APP_MAPS)
    console.log(this.state)
    return (
      <Map google={this.props.google}
        style={{width: '100%', height: '100%', position: 'relative'}}
        className={'map'}
        center={{
            lat: 12.9292117,
            lng: 77.5696024
        }}
        initialCenter={{
            lat: 12.9292117,
            lng: 77.5696024
        }}
        bounds={this.getBounds()}
        zoom={12}>
        {coordinates.map(elem=>{
            return (
                <Marker
                onClick={this.onMarkerClick}
                onMouseover={this.onMouseoverMarker}
                title={elem['name']}
                lable={elem['price']}
                name={elem['price']}
                position={{lat: Number(elem['lat']), lng: Number(elem['lng'])}}>
                </Marker>
            )
        })}
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
            <div>
            <h1>{this.state.selectedPlace.title}</h1>
            </div>
            <div>
            <h3>Rs. {this.state.selectedPlace.name}</h3>
            </div>
        </InfoWindow>
    </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_MAPS)
})(Maps)

