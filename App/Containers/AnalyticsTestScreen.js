import React, { Component } from 'react'
import { View, Button } from 'react-native'

class AnalyticsTestScreen extends Component {
  render () {
    return (
      <View style={{ padding: 15 }}>
        <Button title='Volver' onPress={() => { this.props.navigation.navigate('INICIO') }}/>
      </View>
    )
  }
}

export default AnalyticsTestScreen
