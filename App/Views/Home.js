import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    Button,
    Image
} from 'react-native';
import styles from './Styles/HomeStyles';
import { connect } from 'react-redux';
import I18n from '../I18n/i18n';
import { Card } from 'react-native-elements';

class Home extends Component  {

  /* static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
        title: typeof(params)==='undefined' || typeof(params.title) === 'undefined' ? I18n.t('home'): params.title,
        headerRight: <Button
                         title="Refresh"
                         onPress={ () => params.handleRefresh() } />

    };
  }; */
  
  render() {
    /* this.props.navigation.setParams({title: I18n.t('home')}); */

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
              onPress={ () => this.props.navigation.setParams({title: I18n.t('home')}) }/>
          </Card>

          <Card title={ I18n.t('trail') } style={styles.card}>
            <Image
              style={styles.image}
              source={{uri: 'https://placeimg.com/640/480/nature'}}
              />
            <Button
              title={ I18n.t('goToMap') } 
              onPress={ () => this.props.navigateTo('map') }/>
          </Card>

          <Card title={ I18n.t('trail') } style={styles.card}>
            <Image
              style={styles.image}
              source={{uri: 'https://placeimg.com/640/480/nature'}}
            />
            <Button
              title={ I18n.t('goToMap') } 
              onPress={ () => this.props.navigateTo('map') }/>
          </Card>
        </ScrollView>
      </ScrollView>
      )
    }
}

const mapStateToProps = state => ({
  language: state.settings.language,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => { dispatch(navigateTo(routeName)); },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

