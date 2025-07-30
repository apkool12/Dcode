// components/SplashScreen.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ImageSourcePropType,
} from 'react-native';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      
      <StatusBar barStyle="light-content" />

      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>
          <Text style={styles.dBlue}>D</Text>
          <Text style={styles.code}>-CODE</Text>
        </Text>
        <Text style={styles.subtitle}>
          <Text style={styles.cityBlue}>대전</Text>을 해석하다
        </Text>
        <View style={styles.cityNameContainer}>
          <Image source={require('../assets/images/daejeon.png')} style={styles.cityIcon} />
          <Text style={styles.cityName}>대전광역시</Text>
        </View>
      </View>

      <Image
        source={require('../assets/images/city-pixel.png') as ImageSourcePropType}
        style={styles.cityImage}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1E38',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    marginTop: 65,
    marginRight: 50,
    fontSize: 84,
    fontWeight: 'bold',
    fontFamily: 'NeoDunggeunmoPro-Regular',
    color: '#fff',
  },
  dBlue: {
    color: '#4AABF8',
  },
  code: {
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    fontFamily: 'NeoDunggeunmoPro-Regular',
    marginTop: -5,
    marginRight: 185,
  },
  cityBlue: {
    color: '#4AABF8',
  },
  cityNameContainer: {
    marginRight: 212,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cityIcon: {
    width: 15,
    height: 15,
    marginRight: 8,
    marginTop: -3,
    resizeMode: 'contain',
  },
  cityName: {
    fontFamily: 'AppleSDGothicNeo-Thin',
    fontSize: 15,
    color: '#fff',
  },
  cityImage:{
    width: 400,
    height: 400,
    flexShrink: 0,
    aspectRatio: 1, // 1/1은 1
  },
});

export default SplashScreen;
