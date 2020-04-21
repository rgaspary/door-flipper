/** TODO:
 *  - Create error manager
 *  - Add Ajax component
 *  - Add local storage to setup IoT devices
 *  - Add settings component
 *  - Seperate parts of App.js into smaller parts
 */


import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { IconButton, Colors } from 'react-native-paper';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      garageDoorState: 'CLOSED',
      garageDoorIcon: 'garage',
      buttonBackgroundStyle: styles.doorClosed,
    }

    this.garageControl = this.garageControl.bind(this);
  }

  garageControl = () => {
    const state = this.state.garageDoorState;
    if (state === 'OPEN') {
      this.setState({ 
        garageDoorState: 'CLOSED',
        garageDoorIcon: 'garage',
        buttonBackgroundStyle: styles.doorClosed,
      });
    } else if (state === 'CLOSED') {
      this.setState({
        garageDoorState: 'OPEN',
        garageDoorIcon: 'garage-open',
        buttonBackgroundStyle: styles.doorOpen,
      });
    } else {
      this.setState({ 
        garageDoorState: 'CLOSED',
        garageDoorIcon: 'garage',
        buttonBackgroundStyle: styles.doorClosed,
      });
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Door Flipper (╯°□°）╯︵ &#128682;
          </Text>
        </View>
        <View style={styles.fixToText}>
          <IconButton
            icon={this.state.garageDoorIcon}
            color={Colors.black500}
            size={100}
            onPress={this.garageControl}
            style={this.state.buttonBackgroundStyle}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.status}>THE GARAGE DOOR IS</Text>
          <Text style={styles.status}>{this.state.garageDoorState}!</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  doorOpen: {
    backgroundColor: '#1fffa5',
  },
  doorClosed: {
    backgroundColor: '#ff1f3d',
  },
  container: {
    width: '100%',
    margin: 50,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  status: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 18,
    fontWeight: '700',
  },
  button: {
    flex: 1,
    color: "#841584",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
