import React, { Component } from 'react';
import { StyleSheet, View, Animated, ScrollView, Dimensions, Text } from 'react-native';
import Interactable from 'react-native-interactable';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Screen = {
  height: Dimensions.get('window').height - 75
};

export default class Header extends Component {
  constructor(props) {
    super(props)
    this._deltaY = new Animated.Value(0);
    this.animateTimer = this.animateTimer.bind(this);
  }

  animateTimer() {
    console.log(this.refs)
    // this.refs.circularProgress.performLinearAnimation(100, 8000);
  }

  render() {
    this.animateTimer();
    return (
      <View style={styles.container}>

          <View style={{backgroundColor: 'white', height: 500, alignItems: 'center'}} ref="test">
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
              <AnimatedCircularProgress
                size={320}
                width={2}
                tintColor="#E26D5A"
                backgroundColor="rgba(169, 219, 184, 0.1)"
                style={styles.clock}
                fill={80}
                ref={c => (acp = c)}>
                   {
                    (fill) => (
                      <Text style={styles.points}>
                        24:59
                      </Text>
                    )
                  }
                </AnimatedCircularProgress>
            </Animated.View>
          </View>
          <View>
            <Text style={{fontSize: 50, fontWeight:"200", paddingBottom:1, paddingLeft:5}}>GRIND TIME</Text>
          </View>
          <Interactable.View
            verticalOnly={true}
            snapPoints={[{y: 0}, {y: -150}]}
            boundaries={{top: -150}}
            animatedValueY={this._deltaY}>
            <View style={{left: 0, right: 0, height: 650, backgroundColor: '#E26D5A'}} />
          </Interactable.View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  points: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 72,
    left: 56,
    width: 140,
    textAlign: 'center',
    color: '#E26D5A',
    fontSize: 45,
    fontWeight: "100",
    borderColor: '#E26D5A',
    borderWidth: 1,
  },
  clock: {
    marginTop: 50,
  }
});