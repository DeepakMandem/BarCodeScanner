import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'


export default class ScanScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }
    }
    

    getCameraPermission = () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions:status === 'granted',
            scanned:false
        })

    }

    handleBarCodeScanner = () => {
        
    }

    render(){
        <View>
            <TouchableOpacity
            onPress={this.getCameraPermission}
            style={styles.scanButton}
            title = "Bar Code Scanner"
            >
                <Text style={styles.buttonText}>Scan QR Code</Text>

            </TouchableOpacity>

            <Image
          style={{
            width: 100,
            height: 100,
            marginTop: 40,
            marginLeft: 120,
          }}
          source={require('../assets/BarCodeScanner.jpg')}
          
        />
        </View>
    }

    

       
    

}
const styles = StyleSheet.create({
    scanButton: {
      width: 200,
      height: 200,
      marginTop: 100,
      borderRadius: 200,
      justifyContent: 'center',
      backgroundColor: 'pink',
      paddingHorizontal: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
      },
  });
  