import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Header from '../Header';

class Home extends Component {
    constructor(props) {
        super(props);
    } 
    render() {
        return (
            <View>
                <Header />
            </View>
        );
    }
}

const mapStateToProps = (store) => {
    console.log(store.time);
    return {
        time: store.time
    }
}



module.exports = connect(mapStateToProps)(Home);