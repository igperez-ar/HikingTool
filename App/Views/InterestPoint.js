import React, { Component } from 'react'
import FastImage from 'react-native-fast-image'
import { Text, View, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'

import styles from './Styles/FloraStyles'

import { connect } from 'react-redux'

class InterestPoint extends Component {

  render () {

    const { interestPoint } = this.props;
    ID = this.props.navigation.state.params.point;
    const point = interestPoint[ID].properties;

    return (
        <View style={styles.main}>
        <ScrollView>
            <View>
            <FastImage
                style={styles.image}
                source={{
                priority: FastImage.priority.high},
                point.photo}
            />
            </View>
            <View>
                <Text style={styles.title}>
                    {point.Name}
                </Text>
                <Divider style={styles.divider} />
                <Text style={styles.content}>
                    {point.description}
                </Text>
            </View>
        </ScrollView>
      </View>
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
