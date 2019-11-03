import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    Button,
    Image,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { navigateTo } from '../Redux/actions';
import I18n from '../I18n/i18n';
import { Card, Icon } from 'react-native-elements'

const Home = ({ activeRoute, navigateTo }) => (
  <ScrollView>
    <Text style={styles.header1}>Senderos Populares</Text>
    
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
          onPress={ () => navigateTo('map') }/>
      </Card>

      <Card title={ I18n.t('trail') } style={styles.card}>
        <Image
          style={styles.image}
          source={{uri: 'https://placeimg.com/640/480/nature'}}
        />
        <Button
          title={ I18n.t('goToMap') } 
          onPress={ () => navigateTo('map') }/>
      </Card>
    </ScrollView>
  </ScrollView>
);

Home.propTypes = {
  activeRoute: PropTypes.shape({
    name: PropTypes.string.isRequired,
    screen: PropTypes.any.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  navigateTo: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  row: {
    marginBottom: 20
  },
  card: {
    
  },
  image: {
    width: Dimensions.get('window').width - 60,
    height: 200,
    marginBottom: 20
  },
  header1: {
      fontSize: 28,
      margin: 15,
  },
  text: {
      fontSize: 20,
      width: '70%',
      textAlign: 'center',
      lineHeight: 30,
      marginBottom: '4%',
  },
});

const mapStateToProps = state => ({
  activeRoute: state.routes.activeRoute,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => { dispatch(navigateTo(routeName)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

