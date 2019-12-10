import React, { Component } from 'react';
import FastImage from 'react-native-fast-image';
import { Text, View, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';

import styles from './Styles/TrailCompStyle';

import { connect } from 'react-redux';

class InterestPoint extends Component {

  render () {
    const { interestPoint } = this.props;
    ID = this.props.navigation.state.params.point;
    const point = interestPoint[ID].properties;

    return (
        <ScrollView style={styles.container}>
            <View>
            <FastImage
                style={styles.image}
                source={{
                priority: FastImage.priority.high},
                point.photo}
            />
            </View>
            <View>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>
                      {point.Name}
                  </Text>
                </View>
                <Text style={styles.description}>
                    {point.description}
                </Text>
            </View>
        </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
    interestPoint: state.interestPoints.data.features
  });
  
export default connect(
  mapStateToProps, 
  null
)(InterestPoint);
