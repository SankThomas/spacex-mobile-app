import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { globals } from "../styles/globals";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Home({ navigation }) {
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: "https://images.pexels.com/photos/11755208/pexels-photo-11755208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        style={styles.image}
      >
        <SafeAreaView />
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={[globals.container, styles.container]}
        >
          <Text style={[globals.heading, styles.heading]}>
            The Home of everything Space X.
          </Text>
          <Text style={[globals.text, styles.description]}>
            Get information about SpaceX from this mobile app. From the first to
            the latest launches, take a look at their rockets, launchpads,
            ships, and satelittes. This is the home of Space X.
          </Text>

          <View style={styles.cardsContainer}>
            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("Crew")}
            >
              <Text style={styles.text}>Crew</Text>
            </Pressable>

            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("Dragons")}
            >
              <Text style={styles.text}>Dragons</Text>
            </Pressable>

            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("Landpads")}
            >
              <Text style={styles.text}>Landpads</Text>
            </Pressable>

            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("Launchpads")}
            >
              <Text style={styles.text}>Launchpads</Text>
            </Pressable>

            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("Roadster")}
            >
              <Text style={styles.text}>Roadster</Text>
            </Pressable>

            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("Rockets")}
            >
              <Text style={styles.text}>Rockets</Text>
            </Pressable>

            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("Ships")}
            >
              <Text style={styles.text}>Ships</Text>
            </Pressable>
          </View>
          <SafeAreaView />
          <SafeAreaView />
        </ScrollView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    backgroundColor: "transparent",
  },
  heading: {
    color: "#fee9d7",
  },
  description: {
    marginBottom: 40,
    color: "#fee9d7",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  card: {
    backgroundColor: "#34222e",
    padding: 20,
    borderRadius: 16,
    maxWidth: 300,
    width: 150,
  },
  text: {
    fontSize: 24,
    fontFamily: "productsansregular",
    color: "white",
    marginBottom: 6,
    textAlign: "center",
  },
});
