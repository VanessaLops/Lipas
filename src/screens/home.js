import { DrawerActions } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Image source={require('../assets/borboleta.png')} style={styles.borboleta} />
      </View>
      <View style={styles.container2}>
      <Button
        title="Open Drawer"
        onPress={() => {
          // Verifica se o objeto de navegação tem a função openDrawer
          if (navigation && navigation.openDrawer) {
            navigation.openDrawer(); // Chame openDrawer se estiver disponível
          } else {
            console.warn("navigation.openDrawer is not available");
          }
        }}
      />
        <Image source={require('../assets/menu.png')} style={styles.menu} />
        <View style={styles.menu2} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('local')}>
          <Image source={require('../assets/local.png')} style={styles.local} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEDE3',
  },
  cabecalho: {
    backgroundColor: '#49070A',
    width: '100%',
    height: 70,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  borboleta: {
    width: 50,
    height: 50,
  },
  container2: {
    flex: 1,
    backgroundColor: '#FFEDE3',
    borderWidth: 2,
    borderColor: '#640F1480',
    borderRadius: 50,
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 5,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    width: width * 0.8,
    height: height * 0.15,
    marginBottom: 20,
  },
  menu2: {
    backgroundColor: '#49070A',
    width: width * 0.8,
    height: height * 0.15,
    marginBottom: 20,
  },
  botao: {
    width: width * 0.25,
    height: width * 0.23,
    marginBottom: 300,
  },
  local: {
    width: width * 0.15,
    height: width * 0.15,
    marginBottom: 20,
  },
  manual: {
    width: width * 0.25,
    height: width * 0.23,
    marginBottom: 20,
  },
  button: {
    position: 'absolute',
  },
});

export default HomeScreen;
