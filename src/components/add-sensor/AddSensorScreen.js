import React, { Component } from 'react';

import Toolbar from '../generic/Toolbar.js';
import CenteredCard from '../generic/CenteredCard';
import CardContent from '../generic/CardContent';
import ToolbarSpacer from '../generic/ToolbarSpacer';

export default class AddSensorScreen extends Component {
  render() {
    return (
      <div>
        <Toolbar showTabs={true} />
        <ToolbarSpacer/>
        <CenteredCard>
          <CardContent>
            <h1>Sell your sensor data</h1>
            Please Log In or Create an Account first.
          </CardContent>
        </CenteredCard>
      </div>
    );
  }
}
