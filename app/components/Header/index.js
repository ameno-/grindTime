import React, { Component } from 'react';
import { StyleSheet, View, Animated, ScrollView, Dimensions, Text } from 'react-native';
import Interactable from 'react-native-interactable';

const Screen = {
  height: Dimensions.get('window').height - 75
};

export default class Header extends Component {
  constructor(props) {
    super(props)
    this._deltaY = new Animated.Value(0);
  }
  render() {
    return (
      <View style={styles.container}>

          <View style={{backgroundColor: '#E26D5A', height: 550, alignItems: 'center'}}>
            <Animated.View style={{
              transform: [
                {
                  translateY: this._deltaY.interpolate({
                    inputRange: [-150, -150, 0, 0],
                    outputRange: [-58, -58, 0, 0]
                  })
                },
                {
                  scale: this._deltaY.interpolate({
                    inputRange: [-150, -150, 0, 0],
                    outputRange: [0.35, 0.35, 1, 1]
                  })
                }
              ]
            }}>
              <View style={{width: 150, height: 150, backgroundColor: '#F3FCF0', borderRadius: 75, marginTop: 50}} />
            </Animated.View>
          </View>

          <Interactable.View
            verticalOnly={true}
            snapPoints={[{y: 0}, {y: -150}]}
            boundaries={{top: -150}}
            animatedValueY={this._deltaY}>
            <View style={{left: 0, right: 0, height: 650, backgroundColor: '#272727'}} />
          </Interactable.View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});