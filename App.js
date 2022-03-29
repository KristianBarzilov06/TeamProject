import { StatusBar } from 'expo-status-bar';
import EventList from './EventList';
import { StyleSheet, View, Image , Text, ImageBackground } from 'react-native';

export default function App() {
  const image = { uri: "https://cdn.wallpapersafari.com/93/28/jZxEya.jpg" };
  const localimage = require("./assets/jZxEya.jpg");
  return (
    <ImageBackground source={image} style={styles.container}
    >
    <View style={styles.container}>
      <Text style={styles.setFontSize}>Програма за деня</Text>
      <Text style={styles.setFontSize}>Понеделник</Text>
      <EventList/>
      <StatusBar style='auto'/>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 1007,

  },
  setFontSize: {
    fontSize: 40
  }
});
