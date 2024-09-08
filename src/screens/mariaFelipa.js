import React, { useState, useCallback, useEffect } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  Inter_700Bold,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function MariaFelipaScreen({ navigation }) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Inter_700Bold,
          Inter_500Medium,
          Inter_600SemiBold,
          Inter_400Regular,
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground
        source={require("../assets/maria_felipa.png")}
        style={styles.backgroundImage}
      >
        <Image
          source={require("../assets/borboleta.png")}
          style={styles.borboleta}
        />
        <View style={styles.textContainer}>
          <Text style={styles.texto}>
            Este app tem o objetivo de empoderar mulheres através da segurança e
            autoconfiança.
          </Text>
       
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  borboleta: {
    width: 0.2 * Dimensions.get("window").width,
    height: 0.2 * Dimensions.get("window").width,
    marginTop: 20,
  },
  texto: {
    fontSize: 0.05 * Dimensions.get("window").width,
    color: "#FFECE3",
    textAlign: "center",
    fontFamily: "Inter_700Bold",
    marginHorizontal: 20,
    marginBottom: 40,
  },
  seta: {
    width: 0.1 * Dimensions.get("window").width,
    height: 0.1 * Dimensions.get("window").width,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  loginButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: "#49070A",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
  },
});
