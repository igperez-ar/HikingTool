import React, { Component } from 'react'
import {
    ScrollView,
    Text,
    Button,
    Image
} from 'react-native'
import styles from './Styles/HomeStyles'
import { connect } from 'react-redux'
import { navigateTo } from '../Redux/actions'
import I18n from '../I18n/i18n'
import { Card } from 'react-native-elements'

class Home extends Component  {

  async componentDidMount() {
    if (!this.props.language === null) {
      I18n.locale = this.props.language;
    }
  }

  render( activeRoute, navigateTo ) {
    return (
      <ScrollView>
        <Text style={styles.header1}>{I18n.t('popularTrails')}</Text>
        
        <ScrollView horizontal={true} contentContainerStyle={styles.row}>
          <Card title={ I18n.t('trail') } style={styles.card}>
            <Image
              style={styles.image}
              source={{uri: 'https://placeimg.com/640/480/nature'}}
            />
            <Button
              title={ I18n.t('goToMap') } 
              onPress={ () => navigateTo('map') }/>
          </Card>

          <Card title={ I18n.t('trail') } style={styles.card}>
            <Image
              style={styles.image}
              source={{uri: 'https://placeimg.com/640/480/nature'}}
              />
            <Button
              title={ I18n.t('goToMap') } 
              onPress={ () => console.warn(this.props) }/>
          </Card>

          <Card title={ I18n.t('trail') } style={styles.card}>
            <Image
              style={styles.image}
              source={{uri: 'https://placeimg.com/640/480/nature'}}
            />
            <Button
              title={ I18n.t('goToMap') } 
              onPress={ () => console.warn(this.props.language) }/>
          </Card>
        </ScrollView>
      </ScrollView>
      )
    }
}

const mapStateToProps = state => ({
  activeRoute: state.routes.activeRoute,
  language: state.settings.data.language,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => { dispatch(navigateTo(routeName)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

