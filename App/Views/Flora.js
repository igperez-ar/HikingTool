import React, { Component } from 'react';
import FastImage from 'react-native-fast-image';
import { Text, View, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';

import styles from './Styles/TrailCompStyle';

import { connect } from 'react-redux';

class Flora extends Component {

  render () {
    const { flora } = this.props;
    ID = this.props.navigation.state.params.flora;
    const specie = flora[ID];

    return (
        <ScrollView style={styles.container}>
          <View>
          <FastImage
              style={styles.image}
              source={{
              priority: FastImage.priority.high},
              specie.photo}
          />
          </View>
          <View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {specie.name}
                </Text>
              </View>
              <Text style={styles.subtitle}>
                  {specie.id}
              </Text>
              <Divider style={styles.divider} />
              <Text style={styles.description}>
                  {specie.description}
              </Text>
          </View>
        </ScrollView>
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
