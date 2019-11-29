import React, { Component } from 'react'
import FastImage from 'react-native-fast-image'
import { Text, View, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'

import styles from './Styles/FloraStyles'

import { connect } from 'react-redux'

class Flora extends Component {

  render () {

    const { flora } = this.props;
    ID = this.props.navigation.state.params.flora;
    const specie = flora[ID];

    return (
        <View style={styles.main}>
        <ScrollView>
            <View>
            <FastImage
                style={styles.image}
                source={{
                priority: FastImage.priority.high},
                specie.photo}
            />
            </View>
            <View>
                <Text style={styles.title}>
                    {specie.name}
                </Text>
                <Text style={styles.subtitle}>
                    {specie.id}
                </Text>
                <Divider style={styles.divider} />
                <Text style={styles.content}>
                    {specie.description}
                </Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
    flora: state.settings.language == 'spa' ? state.species.floraSPA : state.species.floraENG
  });
  
  export default connect(
    mapStateToProps, 
    null
  )(Flora);
