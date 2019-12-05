import React, { PureComponent } from 'react'
import { 
  Text,
  TextInput, 
  TouchableOpacity, 
  View, 
  ImageBackground,
  CameraRoll
} from 'react-native'
import { RNCamera } from 'react-native-camera'
import { connect } from 'react-redux'
import PicturesActions from '../Redux/PicturesRedux'
import styles from './Styles/CameraStyles'

/* const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
); */

class Cam extends PureComponent {

  constructor(props){
    super(props);
    this.onSavePicture = this.onSavePicture.bind(this); 
    this.state = {
      picturePath: null,
      comment: '',
      showInput: false
    };
  }

  onSavePicture() {
    copy = JSON.parse(JSON.stringify(this.props.pictures))
    const picture = {'path': this.state.picturePath, 'comment': this.state.comment}
    copy.push(picture)
    this.props.savePicture(copy)
    this.setState({ picturePath: null, comment: null, showInput: false })
  }

  renderInput() {
    if (this.state.showInput)
      return (
        <View style={styles.inputContainer}>
          <View style={{padding: 5}}>
            <Text style={{fontSize: 18, paddingVertical: 5}}>Descripción:</Text>
            <TextInput
              style={styles.input}
              placeholder='...'
              multiline
              numberOfLines={2}
              onChangeText={text => this.setState({ comment: text})}
              value={this.state.comment}
            >
            </TextInput>
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8}}>
              <View style={{width: '48%'}}>
                <TouchableOpacity onPress={() => this.onSavePicture()} style={styles.buttonOK}>
                  <Text style={{ fontSize: 14, textAlign: 'center', marginTop: 8 }}> OK </Text>
                </TouchableOpacity>
              </View>
              <View style={{width: '48%'}}>
                <TouchableOpacity onPress={() => this.setState({ comment: '', showInput: false, picturePath: null })} 
                                  style={styles.buttonCancel}>
                  <Text style={{ fontSize: 14, textAlign: 'center', marginTop: 8 }}> Cancelar </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      );
    return null;
  }

  render() {
    const { pictures } = this.props;
    return (      
      <View style={{flex: 1}}>
        {this.state.picturePath != null ? 
          <ImageBackground source={{uri: this.state.picturePath}} style={styles.picture}>
            {this.renderInput()}
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
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> Capturar </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      }
      </View>
    );
  }

  takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    CameraRoll.saveToCameraRoll(data.uri, "photo");
    this.setState({ picturePath: data.uri, showInput: true });
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

