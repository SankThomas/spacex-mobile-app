import React from "react";
import useFetch from "../hooks/useFetch";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { globals } from "../styles/globals";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Rockets({ navigation }) {
  const [data] = useFetch("https://api.spacexdata.com/v4/rockets");

  return (
    <ScrollView style={globals.container}>
      <Text style={globals.heading}>Rockets</Text>

      <View style={globals.cards}>
        {!data ? (
          <ActivityIndicator size="large" color="#34222e" />
        ) : (
          data.map((rocket) => (
            <Pressable
              onPress={() => navigation.navigate("Rocket", rocket)}
              key={rocket.id}
            >
              <View style={globals.imageContainer}>
                <Image
                  source={{ uri: rocket.flickr_images[0] }}
                  style={globals.image}
                />
                <Text style={[globals.text, styles.text]}>{rocket.name}</Text>
                <Text style={globals.text}>{`${rocket.description.substring(
                  0,
                  100
                )}...`}</Text>
              </View>
            </Pressable>
          ))
        )}
      </View>
      <SafeAreaView />
      <SafeAreaView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "productsansregular",
    fontSize: 28,
    marginBottom: 8,
  },
});
