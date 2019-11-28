import React, { PureComponent } from 'react';
import { 
  Text, 
  TouchableOpacity, 
  View, 
  ImageBackground,
  CameraRoll
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from './Styles/CameraStyles';
import I18n from '../I18n/i18n';

const PendingView = () => (
  <View>
  </View>
);

class Cam extends PureComponent {

  render() {
    return (      
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'permissionCamera',
            message: 'textPermissionCamera',
            buttonPositive: 'ok',
            buttonNegative: 'cancel',
          }}
        >
          {({ camera, status }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> {I18n.t('capture')} </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      </View>
    );
  }

  takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    
    CameraRoll.saveToCameraRoll(data.uri, "photo");

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