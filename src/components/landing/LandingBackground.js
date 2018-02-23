import React, { Component } from 'react';

import LandingMap from './LandingMap';

export default class LandingBackground extends Component {
  render() {
    const mapElementsStyle = {
      height: `100%`,
      width:"100%",
      position:"absolute",
      top:"0",
      left: "0"
    };

    return (
      <LandingMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
        loadingElement={<div style={mapElementsStyle} />}
        containerElement={<div style={{zIndex:"-1", ...mapElementsStyle}} />}
        mapElement={<div style={mapElementsStyle} />}
        />
    );
  }
}
