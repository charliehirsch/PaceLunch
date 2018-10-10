import React from 'react';
import { WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <WebView
        source={{uri: 'http://www.sagedining.com/menus/paceacademy'}}
        style={{marginTop: 20}}
        />
    );
  }
}
