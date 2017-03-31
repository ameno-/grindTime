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
    this.state = {
      canScroll: false
    };
  }
  render() {
    return (
      <View style={styles.container}>

          <View style={{backgroundColor: '#F99F51', height: 250, alignItems: 'center'}}>
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
                    outputRange: [0.5, 0.5, 1, 1]
                  })
                }
              ]
            }}>
              <Text style={{fontSize: 80, color: 'white', marginTop: 80}}>25:00</Text>
            </Animated.View>
          </View>

          <Interactable.View
            verticalOnly={true}
            snapPoints={[{y: 0}, {y: -150, id: 'bottom'}]}
            boundaries={{top: -150}}
            onSnap={this.onSnap.bind(this)}
            animatedValueY={this._deltaY}>
            <ScrollView
              bounces={false}
              canCancelContentTouches={this.state.canScroll}
              onScroll={this.onScroll.bind(this)}
              style={{left: 0, right: 0, height: Screen.height - 100, backgroundColor: 'white'}}>
              <View style={styles.placeholder} />
              <View style={styles.placeholder} />
              <View style={styles.placeholder} />
              <View style={styles.placeholder} />
              <View style={styles.placeholder} />
              <View style={styles.placeholder} />
              <View style={styles.placeholder} />
            </ScrollView>
          </Interactable.View>

      </View>
    );
  }
  onSnap(event) {
    const { id } = event.nativeEvent;
    if (id === 'bottom') {
      this.setState({ canScroll: true });
    }
  }
  onScroll(event) {
    const { contentOffset } = event.nativeEvent;
    if (contentOffset.y === 0) {
      this.setState({ canScroll: false });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  placeholder: {
    backgroundColor: '#CD1931',
    flex: 1,
    height: 120,
    marginHorizontal: 20,
    marginTop: 20
  }
});