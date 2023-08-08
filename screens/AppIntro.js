import {
  Dimensions,
  Image,
  PixelRatio,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globals } from "../styles/globals";
import { StatusBar } from "expo-status-bar";

export const slides = [
  {
    title: "Welcome",
    text: "Everything from rocket science...",
    image:
      "https://images.pexels.com/photos/23783/rocket-launch-space-discovery.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "To Space X",
    text: "...to satellites and ",
    image:
      "https://images.pexels.com/photos/23788/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Home Of Rocket Science",
    text: "And advanced Mathematics, Physics, and Calculus. Enjoy.",
    image:
      "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function AppIntro({ setShowApp }) {
  const { width, height } = Dimensions.get("window");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fee9d7" }}>
      <StatusBar backgroundColor="transparent" />
      <ScrollView
        style={{ flex: 1 }}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
      >
        {slides.map((slide, index) => (
          <View key={index} style={{ width, height }}>
            <Image source={{ uri: slide.image }} style={styles.image} />
            <View style={{ paddingHorizontal: 20 }}>
              <Text style={styles.heading}>{slide.title}</Text>
              <Text style={styles.text}>{slide.text}</Text>
              <Pressable
                onPress={() => setShowApp(true)}
                style={styles.customButton}
              >
                <Text style={styles.customButtonText}>Get Started</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: PixelRatio.getPixelSizeForLayoutSize(230),
    width: "100%",
  },
  heading: {
    color: "#34222e",
    fontSize: 32,
    fontFamily: "productsansregular",
    textAlign: "center",
    marginVertical: 24,
  },
  text: {
    color: "#34222e",
    fontSize: 16,
    fontFamily: "productsansregular",
    textAlign: "center",
    lineHeight: 30,
  },
  customButton: {
    alignItems: "center",
    backgroundColor: "#34222e",
    padding: 20,
    borderRadius: 35,
    marginTop: 24,
  },
  customButtonText: {
    color: "#fee9d7",
    fontFamily: "productsansregular",
    fontSize: 15,
  },
});
