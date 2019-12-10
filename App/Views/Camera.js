import React, { Component } from 'react';
import { 
  Text,
  TextInput, 
  TouchableOpacity, 
  View, 
  ImageBackground,
  CameraRoll,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Overlay } from 'react-native-elements';
import { connect } from 'react-redux';
import PicturesActions from '../Redux/PicturesRedux';
import styles from './Styles/CameraStyles';
import Icon from 'react-native-vector-icons/Ionicons';

import MapboxGL from "@react-native-mapbox-gl/maps";
import { primaryDark, secondaryLight } from '../global.styles';
MapboxGL.setAccessToken("pk.eyJ1Ijoic2VuZGVyb3MiLCJhIjoiY2swdmR3OGgzMHk0ODNtcXM5ZzVzbng1aSJ9.aPqBLjTycTdR-4gMbpSM8w");

//Vars para obtener coords.
var coordinates = {};
var getCoords = false;

class Cam extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
          onPress={navigation.getParam('showPictures')}
        >
          <Icon
            name="md-images"
            style={{ fontSize: 30, color: 'white', marginRight:25 }}
          />
        </TouchableOpacity>
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ showPictures: this._showPictures });
  }

  _showPictures = () => {
    this.setState({ showPictures: !this.state.showPictures });
  };

  constructor(props){
    super(props);
    this.onSavePicture = this.onSavePicture.bind(this);
    this.onUserLocationUpdate = this.onUserLocationUpdate.bind(this);
    this.state = {
      showPictures: false,
      showImage: false,
      picturePath: null,
      comment: '',
      showInput: false
    };
  }

  onSavePicture() {
    copy = JSON.parse(JSON.stringify(this.props.pictures))
    const picture = {'path': this.state.picturePath, 'comment': this.state.comment, 'coords': coordinates}
    copy.push(picture)
    //Linea para verificar valores
    //console.warn(copy)
    this.props.savePicture(copy)
    this.setState({ picturePath: null, comment: '', showInput: false })
  }

  renderInput() {
    if (this.state.showInput)
      return (
        <View style={styles.inputContainer}>
          <View style={{padding: 5}}>
            <Text style={{fontSize:18, paddingVertical:5}}>Descripción:</Text>
            <TextInput
              style={styles.input}
              placeholder='...'
              multiline
              numberOfLines={2}
              onChangeText={text => this.setState({ comment: text})}
              value={this.state.comment}
            >
            </TextInput>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', paddingVertical: 8}}>
              <View style={{width:85}}>
                <TouchableOpacity onPress={() => this.onSavePicture()} style={styles.buttonOK}>
                  <Text style={styles.textButton}> OK </Text>
                </TouchableOpacity>
              </View>
              <View style={{width:85}}>
                <TouchableOpacity onPress={() => this.setState({ comment: '', showInput: false, picturePath: null })} 
                                  style={styles.buttonCancel}>
                  <Text style={styles.textButton}> Cancelar </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      );
    return null;
  }

  onUserLocationUpdate(location) {
    if (getCoords) {
      //ingresa una única vez cuando se toma cada foto.
      coordinates = { 'latitude': location.coords.latitude, 'longitude': location.coords.longitude};
      getCoords = false;
    }
  }

  showImage(image) {
    this.setState({picturePath:image.path, comment:image.comment, showImage:true});
  }

  hideImage() {
    this.setState({picturePath:null, comment:'', showImage:false});
  }

  renderOverlay() {
    if (this.state.showImage) {
      return (
        <Overlay
            width={Dimensions.get('window').width - 50}
            height={Dimensions.get('window').height - 130}
            animationType='fade'
            isVisible={true}
            onBackdropPress={() => this.hideImage()}
            style={styles.overlay}
          >
            <View>
              <Image
                style={{width:'100%', height:350, borderRadius:5, marginBottom:15}}
                source={{ uri: this.state.picturePath }}
              />
              <ScrollView>
                <Text>{this.state.comment}</Text>
              </ScrollView>  
            </View>  
          </Overlay>
      );
    }
    return null;
  }


  render() {
    const pictures = this.props.pictures;

    if (this.state.showPictures) {
      return (
        <ScrollView style={{flex: 1, padding:10, backgroundColor: secondaryLight}}>
          {this.renderOverlay()}

          <View style={{flex:1, flexWrap:'wrap', flexDirection:'row'}}>
          { 
            pictures.map((pic, index) => [
              <View
                style={styles.picCard}
                key={index}
              >
                <TouchableOpacity
                  onPress={() => this.showImage(pic)}
                >
                  <Image
                    style={{width:'100%', height:'100%', borderRadius:5}}
                    source={{ uri: pic.path }}
                  />
                </TouchableOpacity>  
              </View>
            ])
          }
          </View>
        </ScrollView>  
      );
      
    } else {
      return (      
        <View style={{flex: 1}}>
          {this.state.picturePath != null ? 
            <ImageBackground source={{uri: this.state.picturePath}} style={styles.picture}>
              {this.renderInput()}
              <MapboxGL.MapView>
                <MapboxGL.UserLocation 
                  onUpdate={this.onUserLocationUpdate}
                />
              </MapboxGL.MapView>
            </ImageBackground>
          : 
          <RNCamera
            style={styles.preview}
            captureAudio={false}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          >
            {({ camera, status }) => {
              if (status !== 'READY') return null;
              return (
                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                  <Icon name='md-camera' size={35} color={primaryDark}></Icon>
                </TouchableOpacity>
              );
            }}
          </RNCamera>
        }
        </View>
      );
    }
  }

  takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    CameraRoll.saveToCameraRoll(data.uri, "photo");
    this.setState({ picturePath: data.uri, showInput: true });
    //Se busca las coordenadas al momento de tomar la foto para tener pos exacta.
    getCoords = true;
  };

  /* takePicture() {
    this.camera.capture()
      .then((data) => {
        console.log(data);
        this.setState({ path: data.uri })
      })
      .catch(err => console.error(err));
  } */

}

const mapStateToProps = (state) => ({
  pictures: state.pictures.pictures
});

const mapDispatchToProps = (dispatch) => ({
  savePicture: (data) => dispatch(PicturesActions.savePicture(data))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Cam);

