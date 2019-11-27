import React, { PureComponent } from 'react'
import { 
  Text, 
  TouchableOpacity, 
  View, 
  ImageBackground,
  CameraRoll
} from 'react-native'
import { RNCamera } from 'react-native-camera'
import styles from './Styles/CameraStyles'

const PendingView = () => (
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
);

class Cam extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      path: null,
    };
  }

  render() {
    if (this.state.path) {
      return (
        <View>
          <ImageBackground
            source={{ uri: this.state.path }}
            style={styles.preview}
          />
          <Text
            style={styles.cancel}
            onPress={() => this.setState({ path: null })}
          >Cancel
          </Text>
        </View>
      );
    }
    else {
      return (      
        <View style={styles.container}>
          <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          >
            {({ camera, status, recordAudioPermissionStatus }) => {
              if (status !== 'READY') return <PendingView />;
              return (
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                  <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> Capturar </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          </RNCamera>
        </View>
      );
    }
  }

  takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    CameraRoll.saveToCameraRoll(data.uri, "photo");
    this.setState({ path: data.uri })

    console.warn(data.uri);
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

export default Cam;