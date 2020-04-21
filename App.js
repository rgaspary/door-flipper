import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import { render } from 'react-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      garageDoorState: 'CLOSED',
    }
    this.OpenGarage = this.OpenGarage.bind(this);
    this.CloseGarage = this.CloseGarage.bind(this);
  }

  OpenGarage = () => {
    this.setState({
      garageDoorState: 'OPEN',
    });
  }

  CloseGarage = () => {
    this.setState({
      garageDoorState: 'CLOSED',
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Door Flipper (╯°□°）╯︵ &#128682;
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.status}>
            THE DOOR IS {this.state.garageDoorState}!
          </Text>
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
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
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
