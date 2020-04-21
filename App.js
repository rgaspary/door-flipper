import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import { render } from 'react-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      garageDoorState: 'CLOSED',
      backgroundStyle: styles.garageClosed,
    }
    this.OpenGarage = this.OpenGarage.bind(this);
    this.CloseGarage = this.CloseGarage.bind(this);
  }

  OpenGarage = () => {
    this.setState({
      garageDoorState: 'OPEN',
      backgroundStyle: styles.garageOpen,
    });
  }

  CloseGarage = () => {
    this.setState({
      garageDoorState: 'CLOSED',
      backgroundStyle: styles.garageClosed,
    });
  }

  render() {
    return (
      <SafeAreaView style={this.state.backgroundStyle}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Door Flipper (╯°□°）╯︵ &#128682;
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.status}>
            THE GARAGE DOOR IS
          </Text>
          <Text style={styles.status}>{this.state.garageDoorState}!</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.fixToText}>
            <Button 
              style={styles.button}
              onPress={this.OpenGarage}
              title="Open Garage"
            />
            <Button 
              style={styles.button}
              onPress={this.CloseGarage}
              title="Close Garage"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  garageOpen: {
    backgroundColor: '#1fffa5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  garageClosed: {
    backgroundColor: '#ff1f3d',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
