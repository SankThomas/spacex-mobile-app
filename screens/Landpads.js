import React from "react";
import useFetch from "../hooks/useFetch";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { globals } from "../styles/globals";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Landpads({ navigation }) {
  const [data] = useFetch("https://api.spacexdata.com/v4/landpads");

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={globals.container}
    >
      <Text style={globals.heading}>Landpads</Text>

      <View style={globals.cards}>
        {!data ? (
          <ActivityIndicator size="large" color="#34222e" />
        ) : (
          data.map((landpad) => (
            <Pressable
              onPress={() => navigation.navigate("Landpad", landpad)}
              key={landpad.id}
            >
              <View style={globals.imageContainer}>
                <Image
                  source={{ uri: landpad.images.large[0] }}
                  style={globals.image}
                />
                <Text style={[globals.text, styles.text]}>
                  {landpad.full_name}, {landpad.name}
                </Text>
                <Text style={globals.text}>{`${landpad.details.substring(
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
