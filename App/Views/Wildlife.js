import React, { Component } from 'react'
import FastImage from 'react-native-fast-image'
import { Text, View, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'

import styles from './Styles/WildlifeStyles'

import { connect } from 'react-redux'

class Wildlife extends Component {

  render () {

    const { wildlife } = this.props;
    ID = this.props.navigation.state.params.wildlife;
    const specie = wildlife[ID];

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
    wildlife: state.settings.language == 'spa' ? state.species.wildlifeSPA : state.species.wildlifeENG
  });
  
  export default connect(
    mapStateToProps, 
    null
  )(Wildlife);
